#!/usr/bin/env node
/**
 * Mount a supplement study guide on the existing page it completes.
 *
 * A supplement is a guide file that holds only the sections an existing page
 * lacks (its `native` map points at that page for the rest). It has to render
 * below that page, and most of those pages are client components, which cannot
 * render an async server component inside them. So the supplement goes in the
 * route's server layout, after `{children}`: the page is untouched, and the
 * layout, which is already a server component, adds the rest.
 *
 * A route with child pages cannot use its layout: the layout would append the
 * supplement to every child, and /revision/texts/macbeth/act-1 would grow a
 * second copy of the Macbeth guide. Those routes are mounted in page.tsx
 * instead, which works only when the page is itself a server component: the
 * supplement goes last inside the page's top-level fragment.
 *
 * WHAT IT REFUSES TO DO, and why each refusal is loud:
 * - A route with child pages whose page.tsx is a client component, or whose
 *   default export does not end in a plain `</>` fragment. Those are mounted
 *   by hand.
 * - A layout that does not simply return its children. Rewriting a layout with
 *   real structure by regex is how a page loses its chrome silently.
 * - A guide with no `native` claims, which is a complete guide and belongs on
 *   its own page (scripts/write-study-guide-page.mjs), not below another.
 *
 * Idempotent: a layout that already mounts the supplement is left alone.
 *
 *   node scripts/mount-study-guide-supplement.mjs <slug> <route> [<slug> <route> ...]
 */

import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const MARK = 'GuideSupplement'
const argv = process.argv.slice(2)
if (argv.length === 0 || argv.length % 2 !== 0) {
  console.error('usage: mount-study-guide-supplement.mjs <slug> <route> [...]')
  process.exit(2)
}

let failed = 0
for (let i = 0; i < argv.length; i += 2) {
  const slug = argv[i]
  const route = argv[i + 1]
  const dir = join('src/app', route.replace(/^\//, ''))
  const guideFile = join('src/data/study-guides', `${slug}.ts`)
  try {
    if (!existsSync(guideFile)) throw new Error('no guide file')
    if (!/\bnative:\s*\{/.test(readFileSync(guideFile, 'utf8'))) {
      throw new Error('guide has no native claims: it is complete, give it its own page instead')
    }
    if (!existsSync(join(dir, 'page.tsx'))) throw new Error(`${dir} has no page.tsx`)
    const children = readdirSync(dir, { withFileTypes: true }).filter(
      (e) => e.isDirectory() && existsSync(join(dir, e.name, 'page.tsx')),
    )
    if (children.length > 0) {
      mountInPage(
        slug,
        join(dir, 'page.tsx'),
        children.map((c) => c.name),
      )
      continue
    }

    const importLines = `import { GuideSupplement } from '@/components/study-guide/guide-supplement'\nimport { guide } from '@/data/study-guides/${slug}'\n`
    const layout = join(dir, 'layout.tsx')

    if (!existsSync(layout)) {
      writeFileSync(
        layout,
        `${importLines}
// The study-guide sections this page did not have, and its animated story
// visuals, mounted after it. Written by scripts/mount-study-guide-supplement.mjs,
// which explains why a layout rather than the page.

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <GuideSupplement guide={guide} />
    </>
  )
}
`,
      )
      console.log(`${slug}: created ${layout}`)
      continue
    }

    let src = readFileSync(layout, 'utf8')
    if (src.includes(MARK)) {
      console.log(`${slug}: already mounted in ${layout}`)
      continue
    }
    if (/^['"]use client['"]/m.test(src)) throw new Error(`${layout} is a client component`)
    // Either `return <>{children}</>` or a bare `return children`, the form
    // the /resources/revision-notes layouts use to carry only metadata.
    const trivial = /return\s*(?:<>\s*\{children\}\s*<\/>|children\b;?)/
    if (!trivial.test(src))
      throw new Error(`${layout} does more than return its children; mount by hand`)
    src = src.replace(
      trivial,
      `return (\n    <>\n      {children}\n      {/* The sections this page did not have, and its story visuals.\n          See scripts/mount-study-guide-supplement.mjs. */}\n      <GuideSupplement guide={guide} />\n    </>\n  )`,
    )
    // Imports go after the last existing import.
    const lastImport = [...src.matchAll(/^import .*$/gm)].pop()
    src = lastImport
      ? src.slice(0, lastImport.index + lastImport[0].length) +
        '\n' +
        importLines.trimEnd() +
        src.slice(lastImport.index + lastImport[0].length)
      : importLines + src
    writeFileSync(layout, src)
    console.log(`${slug}: mounted in ${layout}`)
  } catch (e) {
    failed++
    console.error(`${slug}: REFUSED - ${e.message}`)
  }
}
process.exit(failed ? 1 : 0)

/**
 * Mount in a server page that has child routes. The guide is imported as
 * `studyGuide` because several of these pages already have a local `guide`.
 * The supplement is placed before the fragment that closes the default
 * export's return, and nowhere else: if that fragment cannot be found exactly
 * once after the export, the page is refused rather than guessed at.
 */
function mountInPage(slug, page, childNames) {
  let src = readFileSync(page, 'utf8')
  if (src.includes(MARK)) {
    console.log(`${slug}: already mounted in ${page}`)
    return
  }
  const why = `route has child pages (${childNames.join(', ')})`
  if (/^['"]use client['"]/m.test(src))
    throw new Error(`${why} and ${page} is a client component; mount by hand`)
  if (/\bstudyGuide\b/.test(src))
    throw new Error(`${page} already uses the name studyGuide; mount by hand`)
  const exp = src.search(/^export default (async )?function /m)
  if (exp < 0) throw new Error(`${page} has no default function export; mount by hand`)
  const close = /\n    <\/>\n  \)\n\}/g
  const after = [...src.slice(exp).matchAll(close)]
  if (after.length === 0)
    throw new Error(`${page} does not end its return in a top-level fragment; mount by hand`)
  const at = exp + after[0].index
  src =
    src.slice(0, at) +
    `\n      {/* The sections this page did not have, and its story visuals.\n          See scripts/mount-study-guide-supplement.mjs. */}\n      <GuideSupplement guide={studyGuide} />` +
    src.slice(at)
  const importLines = `import { GuideSupplement } from '@/components/study-guide/guide-supplement'\nimport { guide as studyGuide } from '@/data/study-guides/${slug}'`
  const lastImport = [...src.matchAll(/^import [\s\S]*? from ['"][^'"]+['"]\n/gm)].pop()
  src = lastImport
    ? src.slice(0, lastImport.index + lastImport[0].length) +
      importLines +
      '\n' +
      src.slice(lastImport.index + lastImport[0].length)
    : importLines + '\n' + src
  writeFileSync(page, src)
  console.log(`${slug}: mounted in ${page} (${why})`)
}
