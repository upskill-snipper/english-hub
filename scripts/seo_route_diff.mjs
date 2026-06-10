// Two-way diff: filesystem routes (src/app/**/page.tsx) vs emitted sitemap URLs.
// Usage: node scripts/seo_route_diff.mjs [path-to-sitemap-urls.txt]
// The URL file is one path per line (no origin), produced by curling /sitemap.xml.
import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

function walk(d, acc) {
  for (const e of readdirSync(d, { withFileTypes: true })) {
    const fp = join(d, e.name)
    if (e.isDirectory()) walk(fp, acc)
    else if (e.name === 'page.tsx') acc.push(fp)
  }
  return acc
}

const pages = walk('src/app', [])
const routes = new Set()
for (const f of pages) {
  let r = f.replaceAll('\\', '/').replace(/^src\/app/, '').replace(/\/page\.tsx$/, '') || '/'
  r = r.split('/').filter((s) => !(s.startsWith('(') && s.endsWith(')'))).join('/') || '/'
  routes.add(r === '' ? '/' : r)
}
const statics = [...routes].filter((r) => !r.includes('['))
const dynamics = [...routes].filter((r) => r.includes('['))

// robots-disallowed sections (private surfaces) — never in sitemap.
const dis = [
  '/api', '/dashboard', '/school', '/admin', '/account', '/learn',
  '/auth', '/consent', '/verify', '/certificate', '/parent',
]
const isDisallowed = (r) => dis.some((d) => r === d || r.startsWith(d + '/'))
const publicStatic = statics.filter((r) => !isDisallowed(r))

const smFile = process.argv[2] || '/tmp/sitemap_urls.txt'
const sm = new Set(
  readFileSync(smFile, 'utf8').trim().split(/\r?\n/).map((s) => (s === '' ? '/' : s)),
)

const missing = publicStatic.filter((r) => !sm.has(r)).sort()
const phantom = [...sm]
  .filter((u) => {
    const r = u === '' ? '/' : u
    if (statics.includes(r)) return false
    return !dynamics.some((d) => {
      const dp = d.split('/')
      const rp = r.split('/')
      if (dp.length !== rp.length) return false
      return dp.every((seg, i) => seg.startsWith('[') || seg === rp[i])
    })
  })
  .sort()

console.log('page.tsx total:', pages.length)
console.log('unique routes:', routes.size, '(static:', statics.length, ', dynamic:', dynamics.length, ')')
console.log('public static (not robots-disallowed):', publicStatic.length)
console.log('sitemap unique URLs:', sm.size)
console.log('')
console.log('== MISSING from sitemap (public static route, not listed):', missing.length, '==')
for (const r of missing) console.log('  ' + r)
writeFileSync('scripts/_missing_from_sitemap.txt', missing.join('\n'))
console.log('')
console.log('== PHANTOM in sitemap (no matching route -> 404 risk):', phantom.length, '==')
for (const r of phantom) console.log('  ' + r)
