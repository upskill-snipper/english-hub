'use client'

import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { HelpCircle } from 'lucide-react'

import { BoardSelectorCards } from '@/components/board/BoardSelectorCards'
import { useBoard, type ExamBoard } from '@/lib/board/board-store'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

type BoardSelectorSectionProps = {
  /** Where to redirect after a selection (defaults to `/`). */
  redirectTo?: string
  /** When true, do not redirect on selection — used by the modal gate. */
  disableRedirect?: boolean
  /** Callback fired after a successful selection. */
  onSelected?: (board: ExamBoard) => void
  /** Compact layout for use inside a modal. */
  compact?: boolean
}

export function BoardSelectorSection({
  redirectTo = '/',
  disableRedirect = false,
  onSelected,
  compact,
}: BoardSelectorSectionProps) {
  const router = useRouter()
  const { board: currentBoard, setBoard } = useBoard()

  const handleSelect = React.useCallback(
    async (board: ExamBoard) => {
      setBoard(board)
      onSelected?.(board)
      if (!disableRedirect) {
        router.push(redirectTo)
        router.refresh()
      }
    },
    [disableRedirect, onSelected, redirectTo, router, setBoard],
  )

  return (
    <div className="flex flex-col gap-6">
      <Tabs defaultValue="gcse" className="gap-5">
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <TabsList>
            <TabsTrigger value="gcse">GCSE (UK)</TabsTrigger>
            <TabsTrigger value="igcse">IGCSE (International)</TabsTrigger>
          </TabsList>
          <TooltipProvider delayDuration={120}>
            <Tooltip>
              <TooltipTrigger
                render={
                  <Link
                    href="#"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
                    aria-label="Not sure which board you study?"
                  >
                    <HelpCircle className="size-3.5" aria-hidden="true" />
                    Not sure? Use our board finder
                  </Link>
                }
              />
              <TooltipContent side="top" align="end">
                Board finder coming soon — pick any board for now and you can change it later in your settings.
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <TabsContent value="gcse" className="mt-0">
          <BoardSelectorCards
            onSelect={handleSelect}
            currentBoard={currentBoard}
            filterType="gcse"
            compact={compact}
          />
        </TabsContent>

        <TabsContent value="igcse" className="mt-0">
          <BoardSelectorCards
            onSelect={handleSelect}
            currentBoard={currentBoard}
            filterType="igcse"
            compact={compact}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default BoardSelectorSection
