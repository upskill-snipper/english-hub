import type { Metadata } from 'next'
import { RevisionShell } from '@/app/revision/_components/revision-shell'
import { t } from '@/lib/i18n/t'

export async function generateMetadata(): Promise<Metadata> {
  const [title, description, ogTitle] = await Promise.all([
    t('resources.rev_notes.meta.title'),
    t('resources.rev_notes.meta.desc'),
    t('resources.rev_notes.meta.og_title'),
  ])
  return {
    title,
    description,
    alternates: { canonical: 'https://theenglishhub.app/resources/revision-notes' },
    openGraph: { title: ogTitle, description },
  }
}

/**
 * The revision-notes guides sit inside the study shell, like every other guide.
 *
 * THE DEFECT, found by the founder on 19 September 2026 and caused by a change
 * shipped the same morning. Nine set texts keep their only real guide in this
 * subtree - The Yellow Wallpaper at 825 lines, A Doll's House at 1,315, Antony
 * and Cleopatra at 1,491 - and the board shelves were corrected to link
 * straight to them instead of to a placeholder.
 *
 * That made the guides reachable and threw the reader out of the product to do
 * it. `RevisionShell` mounts on /revision, /igcse and /a-level; it did not
 * mount here. So clicking a text on the IGCSE Language shelf replaced the
 * sidebar, the board context and the text-scoped navigation with nothing, on a
 * page that has no breadcrumb of its own. The founder's words: "I end up back
 * on an overview page for literature".
 *
 * WHY THIS SUBTREE AND NOT ALL OF /resources. An earlier assessment concluded
 * the resources tree should not be shelled, and it was right about the tree:
 * 129 of those pages are full-bleed heroes and nine carry their own sticky
 * aside, so the shell would fight them. It is not right about this subtree.
 * Checked before writing this: zero of the 46 revision-notes guide directories
 * use `min-h-screen`, `w-screen` or a full-bleed negative margin. They are
 * ordinary prose pages, which is what the shell is for.
 */
export default function Layout({ children }: { children: React.ReactNode }) {
  return <RevisionShell>{children}</RevisionShell>
}
