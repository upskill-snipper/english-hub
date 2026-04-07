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
    <div className="relative flex items-center justify-center gap-3 bg-gradient-to-r from-primary/90 to-primary px-4 py-2.5 text-sm font-medium text-primary-foreground">
      <span>
        Founding Schools Programme &mdash; only 20 places for 2026.{" "}
        <strong className="font-bold">Heavily discounted pricing + locked rates.</strong>
      </span>
      <Link
        href="/contact"
        className="shrink-0 rounded-md bg-white/20 px-3 py-1 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-80"
      >
        Book a Call
      </Link>
      <button
        onClick={dismiss}
        aria-label="Dismiss banner"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-0.5 text-primary-foreground/70 transition-colors hover:bg-white/10"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
