'use client'

/**
 * AnthologyPreview - On-screen document preview component
 *
 * Renders an Anthology document inside a scaled iframe, preserving the
 * A4 print layout at any container width. Provides print and download buttons.
 *
 * Usage:
 *   <AnthologyPreview document={doc} />
 *   <AnthologyPreview document={doc} showControls={false} />
 */

import { useRef, useEffect, useState, useCallback } from 'react'
import {
  getAnthologyHtml,
  generateAnthologyPdf,
  downloadAnthologyWord,
  type AnthologyDocument,
} from '@/lib/anthology'
import { useT } from '@/lib/i18n/use-t'

interface AnthologyPreviewProps {
  /** The typed Anthology document to render */
  document: AnthologyDocument
  /** Show print/download control bar (default: true) */
  showControls?: boolean
  /** Optional class name for the wrapper */
  className?: string
  /** File name for Word download (without extension) */
  fileName?: string
}

export default function AnthologyPreview({
  document: doc,
  showControls = true,
  className = '',
  fileName,
}: AnthologyPreviewProps) {
  const t = useT()
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(0.5)

  // Calculate scale to fit the 794px-wide page into the container
  const updateScale = useCallback(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth
      const pageWidth = 794
      const newScale = Math.min(containerWidth / pageWidth, 1)
      setScale(newScale)
    }
  }, [])

  useEffect(() => {
    updateScale()
    window.addEventListener('resize', updateScale)
    return () => window.removeEventListener('resize', updateScale)
  }, [updateScale])

  // Write HTML into the iframe
  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    const html = getAnthologyHtml(doc, { preview: false })
    const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document
    if (iframeDoc) {
      iframeDoc.open()
      iframeDoc.write(html)
      iframeDoc.close()
    }
  }, [doc])

  const handlePrint = () => generateAnthologyPdf(doc)
  const handleDownload = () => downloadAnthologyWord(doc, fileName)

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {showControls && (
        <div className="flex items-center justify-between rounded-lg bg-ink-950 px-4 py-2.5">
          <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-ink-400">
            {t('anth.preview.label')}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="rounded-full bg-cream-100 px-4 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-ink-800 transition-colors hover:bg-cream-200"
            >
              {t('anth.preview.download_word')}
            </button>
            <button
              onClick={handlePrint}
              className="rounded-full bg-clay-500 px-4 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-cream-50 transition-colors hover:bg-clay-400"
            >
              {t('anth.preview.print_pdf')}
            </button>
          </div>
        </div>
      )}

      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-lg border border-ink-200 bg-cream-200"
        style={{ aspectRatio: '210 / 297' }}
      >
        <iframe
          ref={iframeRef}
          title={t('anth.preview.iframe_title')}
          className="pointer-events-none border-0"
          style={{
            width: '794px',
            height: '1123px',
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
          }}
          sandbox="allow-same-origin"
        />
      </div>
    </div>
  )
}
