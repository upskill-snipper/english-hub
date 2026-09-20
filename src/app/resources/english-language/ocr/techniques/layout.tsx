import { LearningResourceJsonLd } from '@/components/seo/json-ld'

export default function OcrTechniquesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
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
