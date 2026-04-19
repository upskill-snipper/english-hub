"use client"

import { useState } from "react"
import { FileText, FileDown, Presentation, ChevronDown } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { StyleSelectorInline, useResourceStyle, type ResourceStyle } from "@/components/ui/StyleSelector"
import { ErrorBoundary } from "@/components/ErrorBoundary"

/* ── Types ─────────────────────────────────────────────────────────── */

export interface DownloadOption {
  /** Label shown in the menu, e.g. "Download PDF" */
  label: string
  /** Format key used to distinguish handlers */
  format: "pdf" | "word" | "pptx" | "csv"
  /** Handler that performs the actual download. Receives the selected style. */
  onClick: (style?: ResourceStyle) => void | Promise<void>
}

interface DownloadMenuProps {
  /** Download options to show (order preserved) */
  options: DownloadOption[]
  /** Optional size variant for the trigger button */
  size?: "sm" | "default" | "lg"
  /** Optional extra className for the trigger button */
  className?: string
  /** Text for the primary button label (default: "Download") */
  label?: string
  /** Variant for the trigger button */
  variant?: "default" | "outline" | "ghost"
  /** Show style selector in the dropdown (default: true for multi-option, false for single) */
  showStylePicker?: boolean
}

/* ── Icon helper ───────────────────────────────────────────────────── */

function formatIcon(format: DownloadOption["format"]) {
  switch (format) {
    case "pdf":
      return <FileText className="h-4 w-4" />
    case "word":
      return <FileDown className="h-4 w-4" />
    case "pptx":
      return <Presentation className="h-4 w-4" />
    case "csv":
      return <FileDown className="h-4 w-4" />
  }
}

/* ── Component ─────────────────────────────────────────────────────── */

/**
 * A single download button when there is only one option, or a dropdown
 * menu when there are multiple formats available.
 *
 * Usage:
 * ```tsx
 * <DownloadMenu
 *   options={[
 *     { label: "Download PDF",  format: "pdf",  onClick: handlePdf },
 *     { label: "Download Word (.docx)", format: "word", onClick: handleWord },
 *   ]}
 * />
 * ```
 */
export function DownloadMenu(props: DownloadMenuProps) {
  // Wrap the entire menu in an error boundary so any unexpected render
  // failure (e.g. a Base UI internal error or an SSR/hydration mismatch)
  // shows a small inline notice instead of taking down the whole page.
  return (
    <ErrorBoundary
      label="Download menu unavailable"
      fallback={
        <div className="inline-flex items-center gap-2 rounded-lg border border-ink-200 bg-cream-100 px-4 py-2.5 text-xs text-ink-600">
          <FileDown className="h-4 w-4" />
          <span>Download temporarily unavailable</span>
        </div>
      }
    >
      <DownloadMenuInner {...props} />
    </ErrorBoundary>
  )
}

function DownloadMenuInner({
  options,
  size = "default",
  className,
  label = "Download",
  variant = "default",
  showStylePicker,
}: DownloadMenuProps) {
  const [toast, setToast] = useState<string | null>(null)
  const { style, setStyle } = useResourceStyle()

  // Default: show style picker for multi-option menus
  const showPicker = showStylePicker ?? options.length > 1

  if (options.length === 0) return null

  /**
   * Bulletproof click dispatcher.
   *
   * Belt-and-braces protection:
   *  - Always returns a resolved Promise (never throws synchronously)
   *  - Catches sync throws from the handler before they touch React
   *  - Catches async rejections from the handler
   *  - If `setToast` itself throws (state on unmounted component etc.),
   *    falls back to a console error so nothing escapes to React's
   *    error boundary
   */
  function handleClick(opt: DownloadOption): void {
    // Run inside a microtask so any sync throw becomes a rejected promise
    Promise.resolve()
      .then(() => opt.onClick(style))
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(`[DownloadMenu] Download failed (${opt.format}):`, err)
        try {
          setToast("Download failed -- please try again")
          setTimeout(() => {
            try {
              setToast(null)
            } catch {
              // ignore: component may have unmounted
            }
          }, 3000)
        } catch {
          // ignore: setState on unmounted component
        }
      })
  }

  // Single option -- render a plain button, no dropdown needed
  if (options.length === 1 && !showPicker) {
    const opt = options[0]
    return (
      <>
        <button
          className={cn(buttonVariants({ variant, size }), className)}
          onClick={() => handleClick(opt)}
        >
          {formatIcon(opt.format)}
          <span className="ml-1.5">{opt.label}</span>
        </button>
        {toast && <DownloadToast message={toast} onDismiss={() => setToast(null)} />}
      </>
    )
  }

  // Multiple options (or single with style picker) -- render a dropdown
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={<button className={cn(buttonVariants({ variant, size }), className)} />}
        >
          <FileDown className="h-4 w-4" />
          <span className="ml-1.5">{label}</span>
          <ChevronDown className="ml-1 h-3.5 w-3.5 opacity-60" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="min-w-[220px]">
          {showPicker && (
            <>
              <DropdownMenuLabel>Style</DropdownMenuLabel>
              <div className="px-2 py-1.5">
                <StyleSelectorInline value={style} onChange={setStyle} />
              </div>
              <DropdownMenuSeparator />
            </>
          )}
          <DropdownMenuGroup>
            <DropdownMenuLabel>Choose format</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {options.map((opt) => (
              <DropdownMenuItem key={opt.format} onClick={() => handleClick(opt)}>
                {formatIcon(opt.format)}
                {opt.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      {toast && <DownloadToast message={toast} onDismiss={() => setToast(null)} />}
    </>
  )
}

/* ── Inline toast ──────────────────────────────────────────────────── */

function DownloadToast({
  message,
  onDismiss,
}: {
  message: string
  onDismiss: () => void
}) {
  return (
    <div className="fixed top-6 right-6 z-50 animate-in slide-in-from-top-2 fade-in duration-300">
      <div className="flex items-center gap-3 rounded-xl border border-red-500/30 bg-red-500/10 backdrop-blur-sm px-5 py-3 text-sm text-red-200 shadow-lg shadow-red-500/5">
        <span>{message}</span>
        <button
          onClick={onDismiss}
          className="ml-2 text-red-400 hover:text-red-300 font-semibold"
        >
          Dismiss
        </button>
      </div>
    </div>
  )
}
