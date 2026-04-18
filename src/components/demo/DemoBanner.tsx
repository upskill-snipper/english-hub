"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Sparkles, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DemoBannerProps {
  message?: string
}

export default function DemoBanner({
  message = "You are viewing an interactive demo with sample data.",
}: DemoBannerProps) {
  const [dismissed, setDismissed] = useState(true)

  useEffect(() => {
    const isDismissed = sessionStorage.getItem("demo-banner-dismissed")
    if (!isDismissed) {
      setDismissed(false)
    }
  }, [])

  function handleDismiss() {
    sessionStorage.setItem("demo-banner-dismissed", "true")
    setDismissed(true)
  }

  if (dismissed) return null

  return (
    <div className="relative flex items-center justify-between gap-4 bg-gradient-to-r from-amber-500/15 via-yellow-500/15 to-amber-500/15 border border-amber-500/20 px-4 py-3 text-sm">
      <div className="flex items-center gap-3 min-w-0">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-500/20">
          <Sparkles className="h-3.5 w-3.5 text-clay-600" />
        </div>
        <p className="text-amber-700/90 truncate">{message}</p>
      </div>
      <div className="flex items-center gap-3 shrink-0">
        <Button render={<Link href="/contact" />} size="sm" className="bg-amber-500 text-black hover:bg-amber-400 font-semibold">
          Book a Call
        </Button>
        <button
          onClick={handleDismiss}
          className="flex h-6 w-6 items-center justify-center rounded-md text-amber-700/70 hover:text-amber-700 hover:bg-amber-500/10 transition-colors"
          aria-label="Dismiss demo banner"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  )
}
