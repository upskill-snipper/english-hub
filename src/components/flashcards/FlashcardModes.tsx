'use client'

import { BookOpen, Puzzle, ClipboardCheck } from 'lucide-react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { useT } from '@/lib/i18n/use-t'
import type { FlashcardDeck } from '@/data/flashcard-data'
import MatchGame from './MatchGame'
import TestMode from './TestMode'

export type FlashcardMode = 'study' | 'match' | 'test'

interface FlashcardModesProps {
  deck: FlashcardDeck
  mode: FlashcardMode
  onModeChange: (mode: FlashcardMode) => void
  children: React.ReactNode // The existing study UI is passed as children
}

export default function FlashcardModes({
  deck,
  mode,
  onModeChange,
  children,
}: FlashcardModesProps) {
  const t = useT()
  return (
    <Tabs value={mode} onValueChange={(v) => onModeChange(v as FlashcardMode)}>
      <TabsList className="mb-6 w-full sm:w-auto">
        <TabsTrigger value="study" className="gap-1.5">
          <BookOpen className="h-4 w-4" />
          {t('flash.mode.study')}
        </TabsTrigger>
        <TabsTrigger value="match" className="gap-1.5">
          <Puzzle className="h-4 w-4" />
          {t('flash.mode.match')}
        </TabsTrigger>
        <TabsTrigger value="test" className="gap-1.5">
          <ClipboardCheck className="h-4 w-4" />
          {t('flash.mode.test')}
        </TabsTrigger>
      </TabsList>

      <TabsContent value="study">{children}</TabsContent>

      <TabsContent value="match">
        <MatchGame key={`match-${deck.id}`} deck={deck} />
      </TabsContent>

      <TabsContent value="test">
        <TestMode key={`test-${deck.id}`} deck={deck} />
      </TabsContent>
    </Tabs>
  )
}
