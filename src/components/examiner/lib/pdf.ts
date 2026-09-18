// ─── Examiner tool - PDF in the browser via pdf.js ──────────────────────────
//
// Two jobs: pull the text out of a mark-scheme PDF, and rasterise a scanned
// script PDF into page images. pdf.js is loaded on demand (it is over a
// megabyte) and its worker is served from /public/vendor so the bundler never
// has to resolve it. Nothing is uploaded.
// ────────────────────────────────────────────────────────────────────────────

type PdfJs = typeof import('pdfjs-dist')

let pdfjsPromise: Promise<PdfJs> | null = null

async function loadPdfjs(): Promise<PdfJs> {
  if (!pdfjsPromise) {
    pdfjsPromise = import('pdfjs-dist').then((mod) => {
      mod.GlobalWorkerOptions.workerSrc = '/vendor/pdf.worker.min.mjs'
      return mod
    })
  }
  return pdfjsPromise
}

export interface PdfTextResult {
  text: string
  pages: number
  warnings: string[]
}

export async function extractPdfText(buf: ArrayBuffer): Promise<PdfTextResult> {
  const pdfjs = await loadPdfjs()
  const doc = await pdfjs.getDocument({ data: new Uint8Array(buf) }).promise
  const parts: string[] = []
  let empty = 0
  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i)
    const content = await page.getTextContent()
    let line = ''
    const lines: string[] = []
    for (const item of content.items) {
      if (!('str' in item)) continue
      line += item.str
      if (item.hasEOL) {
        lines.push(line)
        line = ''
      } else if (item.str && !item.str.endsWith(' ')) {
        line += ' '
      }
    }
    if (line.trim()) lines.push(line)
    const pageText = lines
      .join('\n')
      .replace(/[ \t]+\n/g, '\n')
      .trim()
    if (!pageText) empty++
    parts.push(pageText)
  }
  const warnings: string[] = []
  if (empty === doc.numPages) {
    warnings.push(
      'This PDF has no text layer - it is a picture of the pages. Paste the mark scheme text instead, or use a PDF exported from the original document.',
    )
  } else if (empty > 0) {
    warnings.push(`${empty} of ${doc.numPages} pages had no readable text and were skipped.`)
  }
  return { text: parts.filter(Boolean).join('\n\n'), pages: doc.numPages, warnings }
}

/** Render each page of a PDF to a JPEG blob whose long edge is `maxEdge`. */
export async function rasterisePdf(buf: ArrayBuffer, maxEdge: number): Promise<Blob[]> {
  const pdfjs = await loadPdfjs()
  const doc = await pdfjs.getDocument({ data: new Uint8Array(buf) }).promise
  const out: Blob[] = []
  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i)
    const base = page.getViewport({ scale: 1 })
    const scale = maxEdge / Math.max(base.width, base.height)
    const viewport = page.getViewport({ scale })
    const canvas = document.createElement('canvas')
    canvas.width = Math.ceil(viewport.width)
    canvas.height = Math.ceil(viewport.height)
    const ctx = canvas.getContext('2d')
    if (!ctx) throw new Error('Canvas is not available in this browser.')
    ctx.fillStyle = '#fff'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    await page.render({ canvas, canvasContext: ctx, viewport }).promise
    const blob = await new Promise<Blob | null>((resolve) =>
      canvas.toBlob(resolve, 'image/jpeg', 0.9),
    )
    if (blob) out.push(blob)
  }
  return out
}
