import type { Metadata } from 'next'
import { guardTextForBoard } from '../_guard'

export const metadata: Metadata = {
  title: 'The Yellow Wallpaper Revision Notes',
  description:
    'Revise The Yellow Wallpaper by Charlotte Perkins Gilman: plot summary, characters, themes, key quotes with analysis, context and exam-style questions.',
  alternates: { canonical: '/resources/revision-notes/the-yellow-wallpaper' },
}

export default async function Layout({ children }: { children: React.ReactNode }) {
  await guardTextForBoard('the-yellow-wallpaper')
  return children
}
