import type { Metadata } from 'next'
import { guardTextForBoard } from '../_guard'

export const metadata: Metadata = {
  title: 'Merchant Of Venice Revision Notes',
  description:
    'Free Merchant Of Venice revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  alternates: { canonical: 'https://theenglishhub.app/resources/revision-notes/merchant-of-venice' },
  openGraph: {
    title: 'Merchant Of Venice Revision Notes — The English Hub',
    description:
      'Free Merchant Of Venice revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  },
}

export default async function Layout({ children }: { children: React.ReactNode }) {
  await guardTextForBoard('merchant-of-venice')
  return children
}
