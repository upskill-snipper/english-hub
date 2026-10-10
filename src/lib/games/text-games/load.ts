/**
 * Load one text's guided path on the server: its study guide, its comic art as
 * served-plate descriptors, and the site's held edition of the text, built into
 * the plain data the page hands the client runner.
 *
 * SERVER AND BUILD ONLY. This reaches the comic registry (src/lib/comics/load.ts)
 * and the held editions, which must never be bundled for the browser;
 * src/__tests__/comics.test.ts fails if a 'use client' module reaches the
 * registry. The runner is given the result, never this module.
 *
 * WHICH TEXTS. Those hasTextGame() names (./slugs.ts): every text with a study
 * guide, from the register generated from each guide's own `rights.status`,
 * less the texts deliberately left out. Until 10 October 2026 a text in
 * copyright had no path, on the reasoning that a game quotes and rearranges a
 * text far more freely than the fair-dealing limits allow. Measured that day,
 * a path quotes only a subset of what its guide page does, so texts in
 * copyright have paths now; the guide's own status is read again here, and a
 * path for a text in copyright that breaks the limits is never returned (see
 * quoted.ts).
 */

import type { TextData } from '@/components/study/InteractiveTextViewer'
import { loadComics } from '@/lib/comics/load'
import { servedPanel, servedPortrait } from '@/lib/comics/served'
import { loadStudyGuide } from '@/lib/study-guides/load'

import { buildTextGame, heldEdition, type HeldEdition } from './build'
import { overTheLimits } from './quoted'
import { hasTextGame } from './slugs'
import type { GameArt, TextGame } from './types'

export { hasTextGame, textGameSlugs } from './slugs'

function isTextData(v: unknown): v is TextData {
  return (
    typeof v === 'object' &&
    v !== null &&
    Array.isArray((v as { sections?: unknown }).sections) &&
    (v as TextData).sections.every((s) => typeof s?.content === 'string')
  )
}

/**
 * A held edition that is not there, as webpack (Next) and Vite (the tests)
 * each report it. Anything else that goes wrong loading one is thrown: a
 * broken edition must stop the build, not quietly switch off the checks it
 * feeds.
 */
function isMissingModule(e: unknown): boolean {
  if (!e || typeof e !== 'object') return false
  const code = (e as { code?: unknown }).code
  if (code === 'MODULE_NOT_FOUND' || code === 'ERR_MODULE_NOT_FOUND') return true
  const message = String((e as { message?: unknown }).message ?? '')
  return /Cannot find module|Unknown variable dynamic import/i.test(message)
}

/**
 * The site's held edition of a text, normalised for matching, or null when it
 * holds none (six public-domain guides have no edition in src/data/full-texts,
 * and the site holds no text in copyright).
 * The text games use it to keep a refrain out of "Where is it?" and to make
 * sure no wrong word in "Finish the quotation" makes a line the text prints.
 *
 * WHY A RELATIVE PATH WITH ITS EXTENSION. The first version imported
 * `@/data/full-texts/${slug}`. Vite's SSR loader, which the repository's own
 * scripts use (scripts/generate-comic-plates.mjs), does not resolve an alias
 * in a variable import: it reported every edition as missing, so the checks
 * this feeds were silently off for every text (found 10 October 2026). Vitest
 * happens to resolve it, so the tests alone would not have shown it. A relative
 * path ending in `.ts` is the form webpack (Next) and Vite both turn into a map
 * of the directory at build time; on the dev server the served paths were
 * checked to be the ones built with the editions. The text-games test fails if
 * any edition in the directory is not found.
 */
export async function loadHeldEdition(slug: string): Promise<HeldEdition | null> {
  if (!/^[a-z0-9-]+$/.test(slug)) return null
  let mod: Record<string, unknown>
  try {
    mod = (await import(`../../../data/full-texts/${slug}.ts`)) as Record<string, unknown>
  } catch (e) {
    if (isMissingModule(e)) return null
    throw e
  }
  const data = Object.values(mod).find(isTextData)
  if (!data) throw new Error(`src/data/full-texts/${slug}.ts exports no held text`)
  return heldEdition(data.sections)
}

/** The comic art a text has, as the descriptors a page may carry. */
export async function loadGameArt(slug: string): Promise<GameArt> {
  const comics = await loadComics(slug)
  const art: GameArt = { panels: {}, portraits: {} }
  for (const p of comics?.panels ?? []) art.panels[p.moment] = servedPanel(slug, p)
  for (const p of comics?.portraits ?? []) art.portraits[p.name] = servedPortrait(slug, p)
  return art
}

/**
 * One text's path, or null for a text with no guided games.
 *
 * A path for a text in copyright that quotes past the fair-dealing limits is
 * thrown, not returned and not quietly dropped: dropped, the links to it would
 * still render and lead nowhere; thrown, the page fails where it can be seen.
 * The tests build every path through here, so it cannot reach a push.
 */
export async function loadTextGame(slug: string): Promise<TextGame | null> {
  if (!hasTextGame(slug)) return null
  const guide = await loadStudyGuide(slug)
  if (!guide) return null
  const [art, held] = await Promise.all([loadGameArt(slug), loadHeldEdition(slug)])
  const game = buildTextGame({ guide, art, held })
  const over = overTheLimits(game, guide)
  if (over.length > 0) {
    throw new Error(`${slug}: its guided path breaks the fair-dealing limits: ${over.join('; ')}`)
  }
  return game
}
