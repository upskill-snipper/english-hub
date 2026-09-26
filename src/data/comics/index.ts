/**
 * The register of comic art, one lazy loader per set text, keyed by the slug
 * its study guide uses in src/data/study-guides. Lazy so that a guide page
 * loads the drawings of its own text and no other.
 *
 * Add a line here when a text's first piece is registered in
 * src/data/comics/<slug>/index.ts. The comics test checks every key has a
 * guide, and that each registry's own slug matches its key.
 *
 * Server and build only. The drawings reach the browser as files rendered at
 * build time (scripts/generate-comic-plates.mjs), never as markup in a page;
 * the server reads this register for the pieces' words and sizes. Nothing
 * marked 'use client' may import this file, directly or through another
 * module, and the comics test fails if one does.
 */

import type { ComicSet } from '@/lib/comics/types'

export const COMIC_LOADERS: Record<string, () => Promise<ComicSet>> = {
  'a-christmas-carol': () => import('./a-christmas-carol').then((m) => m.comics),
  'jekyll-and-hyde': () => import('./jekyll-and-hyde').then((m) => m.comics),
  macbeth: () => import('./macbeth').then((m) => m.comics),
  'romeo-and-juliet': () => import('./romeo-and-juliet').then((m) => m.comics),
}
