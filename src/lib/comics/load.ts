import { COMIC_LOADERS } from '@/data/comics'

import type { ComicSet } from './types'

/** The comic art registered for a text, or null if it has none yet. */
export async function loadComics(slug: string): Promise<ComicSet | null> {
  const load = COMIC_LOADERS[slug]
  return load ? load() : null
}
