import { BreadcrumbJsonLd, LearningResourceJsonLd } from '@/components/seo/json-ld'

export default function EdexcelTechniquesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'English Language', url: 'https://theenglishhub.app/resources/english-language' },
          {
            name: 'Pearson Edexcel',
            url: 'https://theenglishhub.app/resources/english-language/edexcel',
          },
          {
            name: 'Techniques',
            url: 'https://theenglishhub.app/resources/english-language/edexcel/techniques',
          },
        ]}
      />
      <LearningResourceJsonLd
        name="Pearson Edexcel GCSE English Language techniques"
        description="Language and structural techniques for Pearson Edexcel GCSE English: identification, analysis, and how to write about them."
        educationalLevel="GCSE"
        learningResourceType="Lesson"
        about="Pearson Edexcel GCSE English Language techniques"
        url="https://theenglishhub.app/resources/english-language/edexcel/techniques"
      />
      {children}
    </>
  )
}
