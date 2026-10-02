import OcrClusterPage from '../_components/OcrClusterPage'

// The poem list is OCR's, from src/lib/board/ocr-anthology.ts. Until 2 October
// 2026 this page held its own list of fifteen, most of them poems OCR does not
// set; see the docblock in OcrClusterPage.
export default function OCRConflictPage() {
  return <OcrClusterPage slug="conflict" accent="text-red-400" />
}
