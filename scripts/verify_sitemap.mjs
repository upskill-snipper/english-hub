// Crawls every URL in the local sitemap and reports anything that is not a
// clean indexable 200 (4xx/5xx, redirects, or pages carrying noindex).
// Usage: node scripts/verify_sitemap.mjs http://localhost:3199
const base = process.argv[2] || 'http://localhost:3199'

const xml = await (await fetch(`${base}/sitemap.xml`)).text()
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) =>
  m[1].replace('https://theenglishhub.app', ''),
)
console.log(`sitemap URLs: ${urls.length}`)

const bad = []
const noindex = []
let done = 0
const CONCURRENCY = 12

async function check(path) {
  const url = base + (path === '' ? '/' : path)
  try {
    const res = await fetch(url, { redirect: 'manual' })
    if (res.status >= 300 && res.status < 400) {
      bad.push(`${res.status} -> ${res.headers.get('location')}  ${path || '/'}`)
    } else if (res.status !== 200) {
      bad.push(`${res.status}  ${path || '/'}`)
    } else {
      const html = await res.text()
      if (/<meta[^>]+name="robots"[^>]+noindex/i.test(html)) noindex.push(path || '/')
    }
  } catch (e) {
    bad.push(`ERR ${e.message}  ${path || '/'}`)
  }
  done++
  if (done % 100 === 0) console.log(`  checked ${done}/${urls.length}…`)
}

const queue = [...urls]
await Promise.all(
  Array.from({ length: CONCURRENCY }, async () => {
    while (queue.length) await check(queue.shift())
  }),
)

console.log(`\nnon-200 / redirected: ${bad.length}`)
bad.sort().forEach((b) => console.log('  ' + b))
console.log(`\n200 but noindex (must not be in sitemap): ${noindex.length}`)
noindex.sort().forEach((n) => console.log('  ' + n))
process.exit(bad.length || noindex.length ? 1 : 0)
