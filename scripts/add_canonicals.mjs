// Injects self-referencing canonicals (alternates.canonical) into indexable
// pages that export a literal `metadata` object without `alternates`.
// metadataBase is set in src/app/layout.tsx, so relative paths resolve to
// https://theenglishhub.app<route>.
//
// Skips: 'use client' pages (cannot export metadata), pages using
// generateMetadata (compute their own), pages already carrying alternates
// (in the page itself or a same-directory layout), and pages with no
// metadata export at all (reported for visibility).
import { existsSync, readFileSync, writeFileSync } from 'node:fs'

const routes = JSON.parse(readFileSync('src/lib/seo/static-routes.json', 'utf8'))

let injected = 0
const skipped = { client: [], genMeta: [], hasAlt: [], noMeta: [], noFile: [] }

for (const route of routes) {
  const dir = 'src/app' + (route === '/' ? '' : route)
  const pageFile = `${dir}/page.tsx`
  if (!existsSync(pageFile)) { skipped.noFile.push(route); continue }
  const src = readFileSync(pageFile, 'utf8')
  const layoutFile = `${dir}/layout.tsx`
  const layoutSrc = existsSync(layoutFile) ? readFileSync(layoutFile, 'utf8') : ''

  if (/alternates\s*:/.test(src) || /alternates\s*:/.test(layoutSrc)) { skipped.hasAlt.push(route); continue }
  if (/^\s*['"]use client['"]/.test(src)) { skipped.client.push(route); continue }
  if (/generateMetadata/.test(src) || /generateMetadata/.test(layoutSrc)) { skipped.genMeta.push(route); continue }

  const m = src.match(/export const metadata(?:\s*:\s*Metadata)?\s*=\s*\{/)
  if (!m) { skipped.noMeta.push(route); continue }

  const insertAt = m.index + m[0].length
  const updated =
    src.slice(0, insertAt) +
    `\n  alternates: { canonical: '${route}' },` +
    src.slice(insertAt)
  writeFileSync(pageFile, updated)
  injected++
}

console.log('canonicals injected:', injected)
for (const [k, v] of Object.entries(skipped)) {
  console.log(`skipped ${k}: ${v.length}`)
}
console.log('\n-- client pages without canonical (need layout-level metadata later):')
skipped.client.slice(0, 40).forEach((r) => console.log('  ' + r))
console.log('\n-- pages with NO metadata export at all:')
skipped.noMeta.slice(0, 40).forEach((r) => console.log('  ' + r))
