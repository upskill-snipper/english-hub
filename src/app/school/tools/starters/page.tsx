import type { Metadata } from 'next'
import { StarterGenerator } from '@/components/school/StarterGenerator'

export const metadata: Metadata = {
  title: 'Starter Activity Generator | School Tools | The English Hub',
  description:
    'Generate bellwork and starter activities for English lessons. Includes quotes, vocabulary challenges, inference puzzles, grammar fixes, creative prompts, and exam question unpicks.',
  robots: { index: false, follow: false },
}

export default function StartersPage() {
  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8">
      <StarterGenerator />
    </div>
  )
}
