/**
 * The key quotations of each text with a key-quotes page, keyed by the text's
 * slug under src/app/revision/texts/ and flattened into one shape. Each list
 * is loaded only when it is asked for, so a quest pulls in its own text alone.
 */

import type { FlatKeyQuote } from './types'

export type { FlatKeyQuote }

export const KEY_QUOTE_LOADERS: Record<string, () => Promise<FlatKeyQuote[]>> = {
  'a-christmas-carol': () => import('./a-christmas-carol').then((m) => m.FLAT),
  'a-view-from-the-bridge': () => import('./a-view-from-the-bridge').then((m) => m.FLAT),
  'an-inspector-calls': () => import('./an-inspector-calls').then((m) => m.FLAT),
  'animal-farm': () => import('./animal-farm').then((m) => m.FLAT),
  'blood-brothers': () => import('./blood-brothers').then((m) => m.FLAT),
  frankenstein: () => import('./frankenstein').then((m) => m.FLAT),
  'great-expectations': () => import('./great-expectations').then((m) => m.FLAT),
  'jane-eyre': () => import('./jane-eyre').then((m) => m.FLAT),
  'jekyll-and-hyde': () => import('./jekyll-and-hyde').then((m) => m.FLAT),
  'lord-of-the-flies': () => import('./lord-of-the-flies').then((m) => m.FLAT),
  macbeth: () => import('./macbeth').then((m) => m.FLAT),
  'of-mice-and-men': () => import('./of-mice-and-men').then((m) => m.FLAT),
  'romeo-and-juliet': () => import('./romeo-and-juliet').then((m) => m.FLAT),
  'things-fall-apart': () => import('./things-fall-apart').then((m) => m.FLAT),
  'to-kill-a-mockingbird': () => import('./to-kill-a-mockingbird').then((m) => m.FLAT),
}
