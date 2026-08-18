/**
 * check-mdx-compile.mjs — compile every MDX file under content/ with the
 * same MDX core the app uses (via next-mdx-remote's @mdx-js/mdx) and report
 * files that throw.
 *
 * Why this exists: the blog route renders MDX per-request when it is
 * dynamically rendered, so a bad MDX file (e.g. an HTML `<!-- -->` comment,
 * which MDX rejects) never fails the build — it collapses the live page to
 * an empty shell instead. Run this in CI / prebuild to fail loudly.
 *
 * Usage: node scripts/check-mdx-compile.mjs
 * Exit code 1 if any file fails.
 */
import { compile } from '@mdx-js/mdx'
import matter from 'gray-matter'
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

const ROOT = new URL('..', import.meta.url).pathname.replace(/^\/(\w):/, '$1:')
const CONTENT_DIR = join(ROOT, 'content')

function walk(dir) {
  const out = []
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    const st = statSync(p)
    if (st.isDirectory()) out.push(...walk(p))
    else if (name.endsWith('.mdx')) out.push(p)
  }
  return out
}

const files = walk(CONTENT_DIR)
let failures = 0
for (const file of files) {
  const raw = readFileSync(file, 'utf8')
  const { content } = matter(raw)
  try {
    await compile(content, { outputFormat: 'function-body' })
    console.log(`OK    ${relative(ROOT, file)}`)
  } catch (err) {
    failures++
    console.error(`FAIL  ${relative(ROOT, file)}`)
    console.error(`      ${String(err.message).split('\n')[0]}`)
  }
}

console.log(`\n${files.length} files checked, ${failures} failed`)
process.exit(failures ? 1 : 0)
