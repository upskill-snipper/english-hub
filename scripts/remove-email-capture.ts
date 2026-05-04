/**
 * One-shot removal of <EmailCaptureCard /> from every page that uses it.
 * Founder asked to remove the lead-magnet forms — the PDF delivery side
 * was never built, so each capture would generate manual email-the-pack
 * work for the founder. Cleanest fix: remove the forms entirely.
 *
 * Idempotent — files without EmailCaptureCard are skipped silently.
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs'
import { resolve, join } from 'path'

function walk(dir: string, out: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    const s = statSync(full)
    if (s.isDirectory()) walk(full, out)
    else if (entry.endsWith('.tsx')) out.push(full)
  }
  return out
}

const root = resolve(__dirname, '..', 'src', 'app')
const allTsx = walk(root)
const targets = allTsx.filter((f) =>
  /EmailCaptureCard|magnetTitle|magnetSlug/.test(readFileSync(f, 'utf-8')),
)

console.log(`Found ${targets.length} files to process.\n`)

let touched = 0
let unchanged = 0
for (const file of targets) {
  const original = readFileSync(file, 'utf-8')
  let updated = original

  // 1. Remove the import line.
  updated = updated.replace(
    /^import EmailCaptureCard from ['"]@\/components\/marketing\/EmailCaptureCard['"]\s*\r?\n/gm,
    '',
  )

  // 2. Remove the JSX block — self-closing, possibly multi-line.
  updated = updated.replace(/^[ \t]*<EmailCaptureCard[\s\S]*?\/>\s*\r?\n/gm, '')

  if (updated !== original) {
    writeFileSync(file, updated, 'utf-8')
    console.log(`  ✓ ${file.replace(root, 'src/app')}`)
    touched++
  } else {
    console.log(`  - ${file.replace(root, 'src/app')} (no match — please inspect manually)`)
    unchanged++
  }
}

console.log(`\nDone. ${touched} files modified, ${unchanged} unchanged.`)
