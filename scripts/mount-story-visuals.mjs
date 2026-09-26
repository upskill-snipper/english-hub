#!/usr/bin/env node
/**
 * Put a text's animated scene player on one of its act, chapter or stave pages.
 *
 * The whole-text visuals (arc, scene player, character map) sit on the text's
 * main guide page. The pages below it, /macbeth/act-1, /jekyll-and-hyde/chapters
 * and the rest, get the scene player alone: filtered to one part of the text on
 * a single act or chapter page, or all of it, with chips to jump between parts,
 * on an act-by-act or chapter-by-chapter overview.
 *
 *   node scripts/mount-story-visuals.mjs "<slug>:<route>[:<part>]" [...]
 *
 *   "macbeth:/revision/texts/macbeth/act-1:Act 1"   one act
 *   "macbeth:/revision/texts/macbeth/acts"           every act
 *
 * WHERE IT GOES. Straight after the page's hero, the first top-level
 * `</section>` in its return, so the student meets the scenes before the long
 * analysis. A page without one gets it before its closing `</div>`.
 *
 * WHAT IT REFUSES, loudly: a client page (an async server component cannot
 * render inside one), a page already using the name `studyGuide`, a page it
 * cannot find an insertion point in, and a part with no moments in the guide's
 * timeline, which would mount a block that renders nothing. The part check
 * reads the guide file's timeline references as text, so it is a guard against
 * a typo, not proof: the page itself should be looked at.
 *
 * Idempotent: a page that already mounts StoryVisuals is left alone.
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const argv = process.argv.slice(2)
if (argv.length === 0) {
  console.error('usage: mount-story-visuals.mjs "<slug>:<route>[:<part>]" [...]')
  process.exit(2)
}

const partOf = (where) => where.split(',')[0].trim().toLowerCase()

let failed = 0
for (const arg of argv) {
  const [slug, route, part] = arg.split(':')
  try {
    if (!slug || !route) throw new Error(`cannot read "${arg}"`)
    const guideFile = join('src/data/study-guides', `${slug}.ts`)
    if (!existsSync(guideFile)) throw new Error('no guide file')
    const guideSrc = readFileSync(guideFile, 'utf8')
    const tl = guideSrc.indexOf('timeline:')
    if (tl < 0) throw new Error('guide has no timeline')
    const rel = guideSrc.indexOf('relationships:', tl)
    const wheres = [
      ...guideSrc.slice(tl, rel > tl ? rel : undefined).matchAll(/where:\s*(['"])(.*?)\1/g),
    ].map((m) => m[2])
    if (part) {
      const n = wheres.filter((w) => partOf(w) === part.trim().toLowerCase()).length
      if (n === 0) {
        const have = [...new Set(wheres.map(partOf))].join(' | ')
        throw new Error(`no timeline moments in part "${part}"; the guide's parts are: ${have}`)
      }
    }

    const page = join('src/app', route.replace(/^\//, ''), 'page.tsx')
    if (!existsSync(page)) throw new Error(`${page} does not exist`)
    let src = readFileSync(page, 'utf8')
    if (src.includes('<StoryVisuals')) {
      console.log(`${arg}: already mounted in ${page}`)
      continue
    }
    if (/^['"]use client['"]/m.test(src))
      throw new Error(`${page} is a client component; mount by hand`)
    if (/\bstudyGuide\b/.test(src))
      throw new Error(`${page} already uses the name studyGuide; mount by hand`)
    const exp = src.search(/^export default (async )?function /m)
    if (exp < 0) throw new Error(`${page} has no default function export`)
    const ret = src.indexOf('\n  return (', exp)
    if (ret < 0) throw new Error(`${page}: cannot find the default export's return`)

    const props = part ? ` part="${part}"` : ' scenesOnly'
    const block = `\n\n      {/* The key scenes${part ? ` of ${part}` : ', part by part'}, animated. See scripts/mount-story-visuals.mjs. */}\n      <StoryVisuals guide={studyGuide}${props} />`
    const hero = src.indexOf('\n      </section>\n', ret)
    const end = src.indexOf('\n    </div>\n  )\n}', ret)
    let at
    let where
    if (hero > 0 && (end < 0 || hero < end)) {
      at = hero + '\n      </section>'.length
      where = 'after the hero'
    } else if (end > 0) {
      at = end
      where = 'before the closing </div>'
    } else {
      throw new Error(
        `${page}: no top-level </section> or closing </div> to anchor on; mount by hand`,
      )
    }
    src = src.slice(0, at) + block + src.slice(at)

    const importLines = `import { StoryVisuals } from '@/components/study-guide/visuals/story-visuals'\nimport { guide as studyGuide } from '@/data/study-guides/${slug}'`
    const lastImport = [...src.matchAll(/^import [\s\S]*? from ['"][^'"]+['"]\n/gm)].pop()
    src = lastImport
      ? src.slice(0, lastImport.index + lastImport[0].length) +
        importLines +
        '\n' +
        src.slice(lastImport.index + lastImport[0].length)
      : importLines + '\n' + src
    writeFileSync(page, src)
    console.log(`${arg}: mounted in ${page}, ${where}`)
  } catch (e) {
    failed++
    console.error(`${arg}: REFUSED - ${e.message}`)
  }
}
process.exit(failed ? 1 : 0)
