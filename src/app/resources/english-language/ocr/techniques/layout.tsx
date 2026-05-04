import { BreadcrumbJsonLd, LearningResourceJsonLd } from '@/components/seo/json-ld'

export default function OcrTechniquesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'English Language', url: 'https://theenglishhub.app/resources/english-language' },
          { name: 'OCR', url: 'https://theenglishhub.app/resources/english-language/ocr' },
          {
            name: 'Techniques',
            url: 'https://theenglishhub.app/resources/english-language/ocr/techniques',
          },
        ]}
      />
      <LearningResourceJsonLd
        name="OCR GCSE English Language techniques"
        description="Language and structural techniques for OCR GCSE English: identification, analysis, and how to write about them."
        educationalLevel="GCSE"
        learningResourceType="Lesson"
        about="OCR GCSE English Language techniques"
        url="https://theenglishhub.app/resources/english-language/ocr/techniques"
      />
      {children}
    </>
  )
}
