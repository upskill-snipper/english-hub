"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"

const STORAGE_KEY = "founder-banner-dismissed"

export function FounderBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const dismissed = sessionStorage.getItem(STORAGE_KEY)
    if (!dismissed) {
      setVisible(true)
    }
  }, [])

  function dismiss() {
    sessionStorage.setItem(STORAGE_KEY, "1")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="relative flex items-center justify-center gap-3 bg-gradient-to-r from-amber-400 to-yellow-300 px-4 py-2.5 text-sm font-medium text-amber-950">
      <span>
        Register your school FREE with code{" "}
        <strong className="font-bold tracking-wide">FOUNDER</strong> &mdash; full
        access until August 2026
      </span>
      <Link
        href="/for-schools/register"
        className="shrink-0 rounded-md bg-amber-950 px-3 py-1 text-xs font-semibold text-amber-50 transition-opacity hover:opacity-80"
      >
        Register Now
      </Link>
      <button
        onClick={dismiss}
        aria-label="Dismiss banner"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-0.5 text-amber-900 transition-colors hover:bg-amber-300/60"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
