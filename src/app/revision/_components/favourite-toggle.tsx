'use client'

import { useState, useEffect, useCallback } from 'react'
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useT } from '@/lib/i18n/use-t'

const FAVOURITES_KEY = 'english-hub-favourites'
const FAVOURITES_EVENT = 'english-hub-favourites-changed'

function readFavourites(): string[] {
  try {
    const raw = localStorage.getItem(FAVOURITES_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed.filter((v): v is string => typeof v === 'string') : []
  } catch {
    return []
  }
}

function writeFavourites(list: string[]): void {
  try {
    localStorage.setItem(FAVOURITES_KEY, JSON.stringify(list))
    window.dispatchEvent(new CustomEvent(FAVOURITES_EVENT))
  } catch {
    // ignore quota / privacy-mode errors
  }
}

export function FavouriteToggle({ href, title }: { href: string; title: string }) {
  const [mounted, setMounted] = useState(false)
  const [isFav, setIsFav] = useState(false)
  const t = useT()

  const refresh = useCallback(() => {
    setIsFav(readFavourites().includes(href))
  }, [href])

  useEffect(() => {
    setMounted(true)
    refresh()
    const handler = () => refresh()
    window.addEventListener(FAVOURITES_EVENT, handler)
    window.addEventListener('storage', handler)
    return () => {
      window.removeEventListener(FAVOURITES_EVENT, handler)
      window.removeEventListener('storage', handler)
    }
  }, [refresh])

  const toggle = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const list = readFavourites()
    const next = list.includes(href) ? list.filter((h) => h !== href) : [...list, href]
    writeFavourites(next)
    setIsFav(next.includes(href))
  }

  // Render a stable placeholder until mounted to avoid SSR/CSR mismatch.
  if (!mounted) {
    return (
      <span
        aria-hidden="true"
        className="absolute right-3 top-3 inline-flex h-7 w-7 items-center justify-center rounded-full"
      >
        <Star className="size-4 text-muted-foreground/40" />
      </span>
    )
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={isFav}
      aria-label={
        isFav
          ? t('rev.misc2.fav.remove').replace('{title}', title)
          : t('rev.misc2.fav.add').replace('{title}', title)
      }
      title={isFav ? t('rev.misc2.fav.remove_short') : t('rev.misc2.fav.add_short')}
      className={cn(
        'absolute right-3 top-3 z-10 inline-flex h-7 w-7 items-center justify-center rounded-full border border-border/40 bg-background/80 backdrop-blur transition-colors',
        'hover:border-amber-500/50 hover:bg-amber-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50',
      )}
    >
      <Star
        className={cn(
          'size-4 transition-colors',
          isFav ? 'fill-amber-500 text-amber-500' : 'text-muted-foreground',
        )}
        aria-hidden="true"
      />
    </button>
  )
}
