// Sitewide internal-link crawl. Fetches every sitemap URL, extracts every
// internal <a href>, then status-checks each unique internal target.
// Reports: broken links (404/5xx) with their source pages, redirected links
// (should point at the final URL), and orphan pages (in sitemap but zero
// inbound internal links).
// Usage: node scripts/crawl_links.mjs http://localhost:3199
import { writeFileSync } from 'node:fs'

const base = process.argv[2] || 'http://localhost:3199'

const xml = await (await fetch(`${base}/sitemap.xml`)).text()
const pages = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) =>
  m[1].replace('https://theenglishhub.app', '') || '/',
)
console.log(`pages to crawl: ${pages.length}`)

const linkSources = new Map() // target -> Set(sources)
const inbound = new Map() // normalized page -> count
let crawled = 0

function normalize(href) {
  try {
    const u = new URL(href, base)
    if (u.origin !== new URL(base).origin) return null // external
    let p = u.pathname.replace(/\/$/, '') || '/'
    return p
  } catch {
    return null
  }
}

async function crawlPage(path) {
  try {
    const res = await fetch(base + (path === '/' ? '' : path))
    if (!res.ok) return
    const html = await res.text()
    for (const m of html.matchAll(/<a[^>]+href="([^"#]+)(#[^"]*)?"/g)) {
      const target = normalize(m[1])
      if (!target || target.startsWith('/api/')) continue
      if (!linkSources.has(target)) linkSources.set(target, new Set())
      const s = linkSources.get(target)
      if (s.size < 5) s.add(path)
      inbound.set(target, (inbound.get(target) || 0) + 1)
    }
  } catch {}
  crawled++
  if (crawled % 150 === 0) console.log(`  crawled ${crawled}/${pages.length}`)
}

let q = [...pages]
await Promise.all(
  Array.from({ length: 12 }, async () => {
    while (q.length) await crawlPage(q.shift())
  }),
)

const targets = [...linkSources.keys()]
console.log(`unique internal link targets: ${targets.length}`)

const broken = []
const redirected = []
let checked = 0
async function checkTarget(t) {
  try {
    const res = await fetch(base + (t === '/' ? '' : t), { redirect: 'manual' })
    const srcs = [...linkSources.get(t)].slice(0, 4).join(', ')
    if (res.status >= 400) broken.push(`${res.status} ${t}  <- linked from: ${srcs}`)
    else if (res.status >= 300) {
      const loc = res.headers.get('location')
      redirected.push(`${res.status} ${t} -> ${loc}  <- linked from: ${srcs}`)
    }
  } catch (e) {
    broken.push(`ERR ${t} (${e.message})`)
  }
  checked++
  if (checked % 200 === 0) console.log(`  checked ${checked}/${targets.length}`)
}
q = [...targets]
await Promise.all(
  Array.from({ length: 12 }, async () => {
    while (q.length) await checkTarget(q.shift())
  }),
)

// Orphans: sitemap pages nobody links to (homepage excluded).
const orphans = pages.filter((p) => {
  const n = p.replace(/\/$/, '') || '/'
  return n !== '/' && !inbound.has(n)
})

const report = [
  `== BROKEN internal links: ${broken.length} ==`,
  ...broken.sort(),
  ``,
  `== REDIRECTED internal links (update href to final URL): ${redirected.length} ==`,
  ...redirected.sort(),
  ``,
  `== ORPHAN pages (in sitemap, zero inbound links): ${orphans.length} ==`,
  ...orphans.sort(),
].join('\n')
writeFileSync('scripts/_link_report.txt', report)
console.log(`\nbroken: ${broken.length} | redirected: ${redirected.length} | orphans: ${orphans.length}`)
console.log('full report: scripts/_link_report.txt')
