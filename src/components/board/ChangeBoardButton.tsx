'use client'

import * as React from 'react'
import Link from 'next/link'
import { BookOpen, ChevronRight, AlertTriangle } from 'lucide-react'

import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { cn } from '@/lib/utils'

type Variant = 'inline' | 'menu-item' | 'card'

type ChangeBoardButtonProps = {
  variant?: Variant
  className?: string
}

/**
 * Reusable trigger that lets the user change their selected exam board.
 * - Shows the current board name (or a "Select board" CTA when none).
 * - Opens a confirmation dialog explaining the impact before navigating
 *   the user to /board-select?change=1.
 *
 * Variants:
 *   inline      — compact button suitable for inline placement (default).
 *   menu-item   — full-width row designed for dropdowns / menus.
 *   card        — large card-style block for settings pages.
 */
export function ChangeBoardButton({
  variant = 'inline',
  className,
}: ChangeBoardButtonProps) {
  const { board, isHydrated } = useBoard()
  const config = getBoardConfig(board)

  // Avoid hydration mismatch — wait for the persisted store to hydrate
  // before rendering board-dependent labels.
  if (!isHydrated) {
    return null
  }

  // No board chosen yet — link straight to /board-select.
  if (!config) {
    if (variant === 'card') {
      return (
        <Button
          variant="outline"
          size="lg"
          className={cn('w-full justify-between', className)}
          render={<Link href="/board-select" />}
        >
          <span className="inline-flex items-center gap-2">
            <BookOpen className="size-4" />
            Choose your exam board
          </span>
          <ChevronRight className="size-4" />
        </Button>
      )
    }

    if (variant === 'menu-item') {
      return (
        <Button
          variant="ghost"
          className={cn('w-full justify-between', className)}
          render={<Link href="/board-select" />}
        >
          <span className="inline-flex items-center gap-2">
            <BookOpen className="size-4" />
            Choose exam board
          </span>
          <ChevronRight className="size-4" />
        </Button>
      )
    }

    return (
      <Button
        variant="outline"
        size="sm"
        className={cn('gap-1.5', className)}
        render={<Link href="/board-select" />}
      >
        <BookOpen className="size-3.5" />
        Select board
      </Button>
    )
  }

  return (
    <Dialog>
      <DialogTrigger render={renderTrigger({ variant, className, name: config.shortName })} />
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <AlertTriangle className="size-4 text-primary" aria-hidden="true" />
            Change your exam board?
          </DialogTitle>
          <DialogDescription>
            You're currently studying{' '}
            <span className="font-medium text-foreground">{config.fullName}</span>.
            Changing your board will filter all of your content to the new
            board, but your progress will be preserved.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter showCloseButton>
          <Button
            variant="default"
            render={<Link href="/board-select?change=1" />}
          >
            Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

// ─── Trigger renderers ──────────────────────────────────────────────────

function renderTrigger({
  variant,
  className,
  name,
}: {
  variant: Variant
  className?: string
  name: string
}) {
  if (variant === 'card') {
    return (
      <button
        type="button"
        className={cn(
          'group flex w-full items-center justify-between gap-3 rounded-xl border border-border bg-card p-4 text-left transition-colors hover:border-primary/40 hover:bg-accent focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30',
          className
        )}
      >
        <span className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <BookOpen className="size-5" aria-hidden="true" />
          </span>
          <span className="flex flex-col">
            <span className="text-sm text-muted-foreground">Studying</span>
            <span className="text-base font-semibold text-foreground">{name}</span>
          </span>
        </span>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
          Change
          <ChevronRight className="size-4" />
        </span>
      </button>
    )
  }

  if (variant === 'menu-item') {
    return (
      <button
        type="button"
        className={cn(
          'flex w-full items-center justify-between gap-2 rounded-md px-2 py-1.5 text-sm text-foreground hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30',
          className
        )}
      >
        <span className="inline-flex items-center gap-2">
          <BookOpen className="size-4 text-muted-foreground" aria-hidden="true" />
          <span className="truncate">{name}</span>
        </span>
        <span className="text-xs text-muted-foreground">Change</span>
      </button>
    )
  }

  // inline (default)
  return (
    <button
      type="button"
      className={cn(
        'inline-flex items-center gap-1.5 rounded-md border border-border bg-transparent px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30',
        className
      )}
    >
      <BookOpen className="size-3.5 text-muted-foreground" aria-hidden="true" />
      <span className="truncate">{name}</span>
      <span className="text-muted-foreground">Change</span>
      <ChevronRight className="size-3" />
    </button>
  )
}
