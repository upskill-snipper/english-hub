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

/* ── Types ─────────────────────────────────────────────────────────── */

export interface DownloadOption {
  /** Label shown in the menu, e.g. "Download PDF" */
  label: string
  /** Format key used to distinguish handlers */
  format: "pdf" | "word" | "pptx" | "csv"
  /** Handler that performs the actual download */
  onClick: () => void | Promise<void>
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
export function DownloadMenu({
  options,
  size = "default",
  className,
  label = "Download",
  variant = "default",
}: DownloadMenuProps) {
  const [toast, setToast] = useState<string | null>(null)

  if (options.length === 0) return null

  async function handleClick(opt: DownloadOption) {
    try {
      await opt.onClick()
    } catch (err) {
      console.error(`Download failed (${opt.format}):`, err)
      setToast("Download failed -- please try again")
      setTimeout(() => setToast(null), 3000)
    }
  }

  // Single option -- render a plain button, no dropdown needed
  if (options.length === 1) {
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

  // Multiple options -- render a dropdown
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
        <DropdownMenuContent align="start">
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
