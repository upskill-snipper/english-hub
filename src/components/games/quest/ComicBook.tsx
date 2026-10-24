'use client'

import { useEffect, useRef } from 'react'
import { BookImage, Lock, X } from 'lucide-react'

import type { Level, Quest } from '@/lib/games/quest/types'

import { En, fillText, FullPanel, type T } from './challenges/shared'
import { levelTitle } from './LevelPlayer'
import { useFocusTrap } from './use-focus-trap'
import { lockPageScroll } from '@/lib/ui/scroll-lock'

/** The panels a student can collect, in the text's order, each with the level that inks it. */
export function collectablePanels(quest: Quest): { title: string; level: Level | undefined }[] {
  return quest.moments
    .filter((m) => m.panel && quest.art.panels[m.panel])
    .map((m) => ({ title: m.title, level: quest.levels.find((l) => l.panels.includes(m.title)) }))
    .filter((p) => p.level !== undefined)
}

/**
 * The student's copy of the comic, full screen: every panel in the text's
 * order, inked as the comic prints it once its chapter is finished, and until
 * then a blank page that says which chapter inks it.
 *
 * A blank page keeps the panel's own shape, so the book does not jump about
 * as it fills, and names the moment it will show: the guide's title for it,
 * which the chapter's own questions are about anyway.
 */
export function ComicBook({
  quest,
  inked,
  t,
  onClose,
}: {
  quest: Quest
  inked: string[]
  t: T
  onClose: () => void
}) {
  const close = useRef<HTMLButtonElement>(null)
  const dialog = useRef<HTMLDivElement>(null)
  useFocusTrap(dialog)
  const panels = collectablePanels(quest)
  const have = new Set(inked)
  const count = panels.filter((p) => have.has(p.title)).length
  const complete = panels.length > 0 && count === panels.length

  useEffect(() => {
    close.current?.focus({ preventScroll: true })
    // The shared lock (src/lib/ui/scroll-lock.ts): two overlays restoring
    // their own saved values out of order could leave the page frozen.
    const unlock = lockPageScroll()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      unlock()
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div
      ref={dialog}
      role="dialog"
      aria-modal="true"
      aria-labelledby="quest-comic-title"
      className="fixed inset-0 z-[60] flex flex-col bg-background"
    >
      <div className="border-b border-border/60 bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-xl items-center gap-3 px-4 py-3 sm:px-6">
          <button
            ref={close}
            type="button"
            onClick={onClose}
            aria-label={t('quest.comic.close')}
            className="rounded-full p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <X className="size-6" aria-hidden="true" />
          </button>
          <div className="min-w-0 flex-1">
            <h2 id="quest-comic-title" className="truncate font-heading text-lg leading-tight">
              {t('quest.comic.title')}
            </h2>
            <p className="text-xs text-muted-foreground">
              {fillText(t('quest.comic.count'), { n: count, total: panels.length })}
            </p>
          </div>
          <BookImage className="size-6 shrink-0 text-primary" aria-hidden="true" />
        </div>
        <div className="h-1.5 bg-muted">
          <div
            className="h-full bg-gradient-to-r from-amber-400 to-orange-500 transition-[width] duration-500"
            style={{ width: `${panels.length ? (count / panels.length) * 100 : 0}%` }}
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-xl space-y-6 px-4 pb-16 pt-6 sm:px-6">
          <header className="space-y-1 text-center">
            <En as="p" className="font-heading text-2xl">
              {quest.title}
            </En>
            <p className="text-sm text-muted-foreground">
              {complete ? t('quest.comic.complete') : t('quest.comic.how')}
            </p>
          </header>

          <ol className="space-y-6">
            {panels.map(({ title, level }, i) => {
              const panel = quest.art.panels[title]
              const isInked = have.has(title)
              return (
                <li key={title} className="space-y-1.5">
                  <p className="flex items-baseline gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    <span className="tabular-nums">{i + 1}</span>
                    {level && <span>{levelTitle(level, t)}</span>}
                  </p>
                  {isInked ? (
                    <FullPanel panel={panel} />
                  ) : (
                    <div
                      className="flex flex-col items-center justify-center gap-2 rounded-sm border-2 border-dashed border-border bg-muted/40 p-4 text-center"
                      style={{ aspectRatio: `${panel.width} / ${panel.height}` }}
                    >
                      <Lock className="size-7 text-muted-foreground" aria-hidden="true" />
                      <p className="max-w-[16rem] text-sm text-muted-foreground">
                        {level
                          ? fillText(t('quest.comic.locked'), { level: levelTitle(level, t) })
                          : null}
                      </p>
                    </div>
                  )}
                  <En as="p" className="text-sm font-medium leading-snug">
                    {title}
                  </En>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </div>
  )
}
