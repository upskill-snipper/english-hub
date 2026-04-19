"use client"

import { useState, useRef, useEffect } from "react"
import { FileText, FileDown, Presentation, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * DownloadMenu — Dead-simple download button group.
 *
 * Zero external dependencies (no Base UI, no localStorage, no useResourceStyle).
 * Uses native button + native click-outside detection.
 *
 * If anything in this component throws, fall back to plain inline buttons.
 */

/* ── Types ─────────────────────────────────────────────────────────── */

export type ResourceStyle = "cream" | "dark" | "whiteboard"

export interface DownloadOption {
  label: string
  format: "pdf" | "word" | "pptx" | "csv"
  onClick: (style?: ResourceStyle) => void | Promise<void>
}

interface DownloadMenuProps {
  options: DownloadOption[]
  size?: "sm" | "default" | "lg"
  className?: string
  label?: string
  variant?: "default" | "outline" | "ghost"
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

/* ── Plain button styling (inline — no buttonVariants dependency) ──── */

function buttonClass(variant: "default" | "outline" | "ghost", size: "sm" | "default" | "lg") {
  const base =
    "inline-flex items-center justify-center gap-1.5 rounded-lg font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 disabled:opacity-50"
  const sizeMap = {
    sm: "h-8 px-3 text-xs",
    default: "h-9 px-4 text-sm",
    lg: "h-10 px-5 text-sm",
  }
  const variantMap = {
    default: "bg-teal-800 text-white hover:bg-teal-700",
    outline: "border border-ink-200 bg-white text-ink-700 hover:bg-cream-50",
    ghost: "text-ink-700 hover:bg-cream-100",
  }
  return cn(base, sizeMap[size], variantMap[variant])
}

/* ── Component ─────────────────────────────────────────────────────── */

export function DownloadMenu({
  options,
  size = "default",
  className,
  label = "Download",
  variant = "default",
}: DownloadMenuProps) {
  const [open, setOpen] = useState(false)
  const [toast, setToast] = useState<string | null>(null)
  const [style, setStyle] = useState<ResourceStyle>("cream")
  const wrapperRef = useRef<HTMLDivElement>(null)

  // Hydrate style from localStorage client-side only (safe SSR)
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem("english-hub-resource-style")
      if (stored === "cream" || stored === "dark" || stored === "whiteboard") {
        setStyle(stored)
      }
    } catch {
      // Ignore — no localStorage available
    }
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!open) return
    function handleOutsideClick(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleOutsideClick)
    return () => document.removeEventListener("mousedown", handleOutsideClick)
  }, [open])

  // Persist style choice
  function selectStyle(next: ResourceStyle) {
    setStyle(next)
    try {
      window.localStorage.setItem("english-hub-resource-style", next)
    } catch {
      // Ignore
    }
  }

  if (options.length === 0) return null

  /**
   * Bulletproof click dispatcher. NEVER throws to React.
   */
  function handleClick(opt: DownloadOption): void {
    setOpen(false)
    Promise.resolve()
      .then(() => opt.onClick(style))
      .then(() => {
        try {
          setToast(`${opt.label} started`)
          setTimeout(() => {
            try { setToast(null) } catch { /* unmounted */ }
          }, 2500)
        } catch { /* unmounted */ }
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(`[DownloadMenu] Download failed (${opt.format}):`, err)
        try {
          setToast(`${opt.label} failed — try again`)
          setTimeout(() => {
            try { setToast(null) } catch { /* unmounted */ }
          }, 3500)
        } catch { /* unmounted */ }
      })
  }

  // Single option — render plain button
  if (options.length === 1) {
    const opt = options[0]
    return (
      <>
        <button
          type="button"
          className={cn(buttonClass(variant, size), className)}
          onClick={() => handleClick(opt)}
        >
          {formatIcon(opt.format)}
          <span>{opt.label}</span>
        </button>
        {toast && <DownloadToast message={toast} onDismiss={() => setToast(null)} />}
      </>
    )
  }

  // Multiple options — native dropdown using plain HTML
  return (
    <>
      <div ref={wrapperRef} className="relative inline-block">
        <button
          type="button"
          className={cn(buttonClass(variant, size), className)}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-haspopup="menu"
        >
          <FileDown className="h-4 w-4" />
          <span>{label}</span>
          <ChevronDown className={cn("h-3.5 w-3.5 opacity-60 transition-transform", open && "rotate-180")} />
        </button>

        {open && (
          <div
            role="menu"
            className="absolute left-0 top-full z-50 mt-1 min-w-[240px] overflow-hidden rounded-lg border border-ink-200 bg-white shadow-lg"
          >
            {/* Style picker */}
            <div className="border-b border-ink-100 bg-cream-50 px-3 py-2">
              <p className="font-mono text-[9px] font-medium uppercase tracking-[0.18em] text-ink-500 mb-1.5">
                Style
              </p>
              <div className="flex gap-1">
                {(["cream", "dark", "whiteboard"] as ResourceStyle[]).map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => selectStyle(s)}
                    className={cn(
                      "flex-1 rounded-md px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors",
                      style === s
                        ? "bg-clay-500 text-white"
                        : "bg-white text-ink-500 hover:bg-cream-100"
                    )}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Format options */}
            <div className="py-1">
              <p className="font-mono text-[9px] font-medium uppercase tracking-[0.18em] text-ink-500 px-3 py-1.5">
                Format
              </p>
              {options.map((opt) => (
                <button
                  key={opt.format}
                  type="button"
                  role="menuitem"
                  onClick={() => handleClick(opt)}
                  className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-ink-700 transition-colors hover:bg-cream-50 focus:bg-cream-50 focus:outline-none"
                >
                  {formatIcon(opt.format)}
                  <span>{opt.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
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
  const isError = message.toLowerCase().includes("failed")
  return (
    <div className="fixed top-6 right-6 z-50">
      <div
        className={cn(
          "flex items-center gap-3 rounded-xl border px-5 py-3 text-sm shadow-lg backdrop-blur-sm",
          isError
            ? "border-clay-500/30 bg-clay-500/10 text-clay-700"
            : "border-teal-700/30 bg-teal-700/10 text-teal-800"
        )}
      >
        <span className="font-medium">{message}</span>
        <button
          type="button"
          onClick={onDismiss}
          className={cn(
            "font-semibold hover:opacity-80",
            isError ? "text-clay-600" : "text-teal-700"
          )}
        >
          Dismiss
        </button>
      </div>
    </div>
  )
}
