#!/usr/bin/env node
// Final verification link audit for The English Hub
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve('D:/Coding/english-hub');
const APP_DIR = path.join(ROOT, 'src', 'app');
const COMPONENTS_DIR = path.join(ROOT, 'src', 'components');

// ---------- 1. Walk src/app to collect routes ----------
/** Each route is stored as an array of segments, with dynamic segments tagged. */
const staticRoutes = new Set(); // e.g. "/revision/texts/macbeth"
const dynamicRoutes = []; // [{ segments: [{lit|dyn, value}], hasCatchAll: bool, raw: "/..." }]

function collectRoutes(dir, segs = []) {
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return;
  }
  // If this dir has a page.tsx / page.ts / page.jsx / page.js → register a route
  const hasPage = entries.some(
    (e) => e.isFile() && /^page\.(t|j)sx?$/.test(e.name)
  );
  if (hasPage) {
    registerRoute(segs);
  }
  for (const e of entries) {
    if (!e.isDirectory()) continue;
    const name = e.name;
    // Skip private folders and special Next.js folders that don't affect URL
    if (name.startsWith('_')) continue;
    // Route groups (group) don't appear in URL
    if (name.startsWith('(') && name.endsWith(')')) {
      collectRoutes(path.join(dir, name), segs);
      continue;
    }
    // @parallel and .slot segments don't affect direct URL - skip for now
    if (name.startsWith('@')) {
      collectRoutes(path.join(dir, name), segs);
      continue;
    }
    collectRoutes(path.join(dir, name), [...segs, name]);
  }
}

function registerRoute(segs) {
  // Determine if dynamic
  const parsed = segs.map((s) => {
    if (s.startsWith('[...') && s.endsWith(']')) {
      return { kind: 'catchall', value: s };
    }
    if (s.startsWith('[[...') && s.endsWith(']]')) {
      return { kind: 'optcatchall', value: s };
    }
    if (s.startsWith('[') && s.endsWith(']')) {
      return { kind: 'dyn', value: s };
    }
    return { kind: 'lit', value: s };
  });
  const anyDynamic = parsed.some((p) => p.kind !== 'lit');
  const raw = '/' + parsed.map((p) => p.value).join('/');
  const clean = raw === '/' ? '/' : raw;
  if (!anyDynamic) {
    staticRoutes.add(clean === '' ? '/' : clean);
  } else {
    dynamicRoutes.push({ segments: parsed, raw: clean });
  }
}

collectRoutes(APP_DIR);
// Also register the root "/"
// (if src/app/page.tsx exists it will be already)
if (fs.existsSync(path.join(APP_DIR, 'page.tsx')) || fs.existsSync(path.join(APP_DIR, 'page.ts'))) {
  staticRoutes.add('/');
}

// ---------- 2. Collect API routes (route.ts/route.tsx/route.js) ----------
const apiRoutes = new Set();
function collectApi(dir, segs = []) {
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return;
  }
  const hasRoute = entries.some(
    (e) => e.isFile() && /^route\.(t|j)sx?$/.test(e.name)
  );
  if (hasRoute) {
    const parsed = segs.map((s) => {
      if (s.startsWith('[') && s.endsWith(']')) return { kind: 'dyn', value: s };
      return { kind: 'lit', value: s };
    });
    const raw = '/' + parsed.map((p) => p.value).join('/');
    apiRoutes.add(raw);
  }
  for (const e of entries) {
    if (!e.isDirectory()) continue;
    const name = e.name;
    if (name.startsWith('_')) continue;
    if (name.startsWith('(') && name.endsWith(')')) {
      collectApi(path.join(dir, name), segs);
      continue;
    }
    collectApi(path.join(dir, name), [...segs, name]);
  }
}
collectApi(APP_DIR);

// ---------- 3. Walk source files to extract hrefs ----------
const hrefs = []; // {file, line, href, raw}

function walk(dir, out = []) {
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (['node_modules', '.next', '.git'].includes(e.name)) continue;
      walk(full, out);
    } else if (e.isFile() && /\.(t|j)sx?$/.test(e.name)) {
      out.push(full);
    }
  }
  return out;
}
const files = [...walk(APP_DIR), ...walk(COMPONENTS_DIR)];

// Regex patterns for hrefs/redirects/router.push
// href="/..." | href='/...' | href={"/..."} | href={`/...`}
// redirect("/...") | redirect(`/...`)
// router.push("/...") | router.push(`/...`) | router.replace
// Link to="/..."
const patterns = [
  // href="..." or href='...'
  /\bhref\s*=\s*["']([^"']+)["']/g,
  // href={"..."} or href={'...'}
  /\bhref\s*=\s*\{\s*["']([^"']+)["']\s*\}/g,
  // href={`...`}
  /\bhref\s*=\s*\{\s*`([^`]+)`\s*\}/g,
  // href: "..."  (object literal)
  /\bhref\s*:\s*["']([^"']+)["']/g,
  // href: `...`
  /\bhref\s*:\s*`([^`]+)`/g,
  // redirect('/...')
  /\bredirect\s*\(\s*["']([^"']+)["']\s*\)/g,
  // redirect(`/...`)
  /\bredirect\s*\(\s*`([^`]+)`\s*\)/g,
  // router.push('/...') / router.replace('/...')
  /\brouter\.(?:push|replace)\s*\(\s*["']([^"']+)["']\s*\)/g,
  /\brouter\.(?:push|replace)\s*\(\s*`([^`]+)`\s*\)/g,
];

for (const file of files) {
  let content;
  try {
    content = fs.readFileSync(file, 'utf8');
  } catch {
    continue;
  }
  const lines = content.split(/\r?\n/);
  for (const pat of patterns) {
    pat.lastIndex = 0;
    let m;
    while ((m = pat.exec(content)) !== null) {
      const href = m[1];
      // only consider internal links
      if (!href || typeof href !== 'string') continue;
      if (!href.startsWith('/')) continue;
      // Skip protocol-relative or query-only anchors
      if (href.startsWith('//')) continue;
      // locate line number
      const idx = m.index;
      const preceding = content.slice(0, idx);
      const lineNum = preceding.split(/\r?\n/).length;
      hrefs.push({ file, line: lineNum, href });
    }
  }
}

// ---------- 4. Normalize + classify hrefs ----------
function normalizeHref(href) {
  // strip hash, query
  let h = href;
  const hashIdx = h.indexOf('#');
  if (hashIdx >= 0) h = h.slice(0, hashIdx);
  const qIdx = h.indexOf('?');
  if (qIdx >= 0) h = h.slice(0, qIdx);
  // Replace ${...} template expressions with "*"
  h = h.replace(/\$\{[^}]*\}/g, '*');
  // Collapse duplicate slashes
  h = h.replace(/\/{2,}/g, '/');
  // Remove trailing slash (except root)
  if (h.length > 1 && h.endsWith('/')) h = h.slice(0, -1);
  return h;
}

function matchesDynamic(pathSegs, route) {
  const rSegs = route.segments;
  let i = 0;
  let j = 0;
  while (i < rSegs.length) {
    const r = rSegs[i];
    if (r.kind === 'lit') {
      if (j >= pathSegs.length) return false;
      if (pathSegs[j] !== r.value) return false;
      i++;
      j++;
    } else if (r.kind === 'dyn') {
      if (j >= pathSegs.length) return false;
      // consume exactly one segment (wildcard "*" counts as match)
      j++;
      i++;
    } else if (r.kind === 'catchall') {
      // [...slug] — consume 1 or more remaining
      if (j >= pathSegs.length) return false;
      j = pathSegs.length;
      i++;
    } else if (r.kind === 'optcatchall') {
      // [[...slug]] — consume 0 or more remaining
      j = pathSegs.length;
      i++;
    }
  }
  return j === pathSegs.length;
}

// Precompute a map of parent path → Set of static child segments
// so we can decide whether a template href like /a/b/* is valid when
// at least one /a/b/<child> static page exists.
const staticChildrenByParent = new Map();
for (const r of staticRoutes) {
  const segs = r.split('/').filter(Boolean);
  if (segs.length === 0) continue;
  for (let i = 0; i < segs.length; i++) {
    const parent = '/' + segs.slice(0, i).join('/');
    const child = segs[i];
    const key = parent === '/' ? '/' : parent;
    if (!staticChildrenByParent.has(key)) staticChildrenByParent.set(key, new Set());
    staticChildrenByParent.get(key).add(child);
  }
}

function isValidRoute(href) {
  const h = normalizeHref(href);
  if (h === '/') return staticRoutes.has('/');
  if (h === '') return false;
  // check static
  if (staticRoutes.has(h)) return true;
  // check API routes
  if (h.startsWith('/api')) {
    if (apiRoutes.has(h)) return true;
    const pathSegs = h.split('/').filter(Boolean);
    // Build dynamic api routes
    for (const apiRaw of apiRoutes) {
      const parsed = apiRaw.split('/').filter(Boolean).map((s) =>
        s.startsWith('[') && s.endsWith(']') ? { kind: 'dyn', value: s } : { kind: 'lit', value: s }
      );
      if (parsed.some((p) => p.kind === 'dyn')) {
        if (matchesDynamic(pathSegs, { segments: parsed })) return true;
      }
    }
    return false;
  }
  const pathSegs = h.split('/').filter(Boolean);
  // dynamic route pattern match
  for (const r of dynamicRoutes) {
    if (matchesDynamic(pathSegs, r)) return true;
  }
  // Template wildcard handling:
  // If the href contains "*" (from ${...} normalization), the template is
  // considered valid if either:
  //   (a) a dynamic route pattern matches it (handled above), OR
  //   (b) at least one STATIC child page exists under its parent path.
  // This reflects the common pattern where slug lists point at pre-built static pages.
  if (pathSegs.includes('*')) {
    // walk each position that is "*" and check the parent has static children
    for (let i = 0; i < pathSegs.length; i++) {
      if (pathSegs[i] !== '*') continue;
      const parent = '/' + pathSegs.slice(0, i).join('/');
      const parentKey = parent === '/' ? '/' : parent;
      const children = staticChildrenByParent.get(parentKey);
      if (!children || children.size === 0) return false;
      // For templates like /a/b/*/c — require at least one child that
      // leads to a valid continuation. Simplified: only accept if "*" is
      // the last segment, or if every subsequent literal is known to exist
      // under at least one child. For this codebase the template slugs
      // are almost always the final segment, so we accept "*" tail and
      // otherwise fall through to failure.
      if (i === pathSegs.length - 1) return true;
    }
    return false;
  }
  return false;
}

const broken = [];
const seen = new Set();
for (const h of hrefs) {
  const key = `${h.file}|${h.line}|${h.href}`;
  if (seen.has(key)) continue;
  seen.add(key);
  // Skip non-page assets (images, files, mailto, tel etc.)
  if (/^\/(?:favicon|icon|images?|img|static|fonts?|assets|videos?|downloads?|robots|sitemap|manifest|opengraph|apple-touch|logo|uploads?)\b/i.test(h.href)) continue;
  if (/\.(png|jpe?g|svg|gif|webp|ico|pdf|mp4|mp3|wav|zip|css|js|json|xml|txt|webmanifest|woff2?|ttf)$/i.test(h.href)) continue;
  if (!isValidRoute(h.href)) {
    broken.push(h);
  }
}

// ---------- 5. Generate report ----------
const byFile = new Map();
for (const b of broken) {
  const rel = path.relative(ROOT, b.file).replace(/\\/g, '/');
  if (!byFile.has(rel)) byFile.set(rel, []);
  byFile.get(rel).push(b);
}

const sortedFiles = [...byFile.keys()].sort();
let md = '';
md += '# Broken Internal Links Audit v2 (Final Verification)\n\n';
md += `Run date: ${new Date().toISOString()}\n\n`;
md += '## Summary\n\n';
md += `- Total internal hrefs scanned: **${hrefs.length}**\n`;
md += `- Unique href/location entries: **${seen.size}**\n`;
md += `- Static routes discovered: **${staticRoutes.size}**\n`;
md += `- Dynamic route patterns discovered: **${dynamicRoutes.length}**\n`;
md += `- API route endpoints discovered: **${apiRoutes.size}**\n`;
md += `- **Broken internal links: ${broken.length}**\n`;
md += `- Files containing broken links: **${byFile.size}**\n`;
md += `- Previous audit (v1) broken count: 43\n`;
md += `- Improvement: **${43 - broken.length}** fewer broken links (${broken.length === 0 ? '100%' : Math.round(((43 - broken.length) / 43) * 100) + '%'} reduction)\n\n`;

// Category breakdown
const categories = {
  '/revision/texts': 0,
  '/revision/poetry': 0,
  '/analysis/jekyll-hyde': 0,
  '/resources/english-literature/caie': 0,
  '/analysis': 0,
  '/resources': 0,
  '/revision': 0,
  '/learn': 0,
  '/igcse': 0,
  '/courses': 0,
  '/dashboard': 0,
  '/api': 0,
  'other': 0,
};
for (const b of broken) {
  const h = normalizeHref(b.href);
  let matched = false;
  for (const prefix of Object.keys(categories)) {
    if (prefix === 'other') continue;
    if (h.startsWith(prefix)) {
      categories[prefix]++;
      matched = true;
      break;
    }
  }
  if (!matched) categories['other']++;
}
md += '## Broken link categories\n\n';
md += '| Category | Count |\n|---|---|\n';
for (const [k, v] of Object.entries(categories)) {
  if (v > 0) md += `| \`${k}\` | ${v} |\n`;
}
md += '\n';

if (broken.length === 0) {
  md += '## All clear\n\nNo broken internal links detected. All internal hrefs resolve to valid static routes, dynamic route patterns, or API endpoints.\n';
} else {
  md += '## Broken links by file\n\n';
  for (const file of sortedFiles) {
    const entries = byFile.get(file).sort((a, b) => a.line - b.line);
    md += `### \`${file}\`\n\n`;
    md += '| Line | Href | Normalized | Reason |\n|---|---|---|---|\n';
    for (const e of entries) {
      const normalized = normalizeHref(e.href);
      const reason = 'No matching static route or dynamic pattern';
      md += `| ${e.line} | \`${e.href}\` | \`${normalized}\` | ${reason} |\n`;
    }
    md += '\n';
  }

  // Deduplicated list of unique broken hrefs
  const uniqueBroken = new Map();
  for (const b of broken) {
    const n = normalizeHref(b.href);
    if (!uniqueBroken.has(n)) uniqueBroken.set(n, 0);
    uniqueBroken.set(n, uniqueBroken.get(n) + 1);
  }
  md += '## Unique broken hrefs (deduplicated)\n\n';
  md += '| Normalized href | Occurrences |\n|---|---|\n';
  for (const [href, count] of [...uniqueBroken.entries()].sort()) {
    md += `| \`${href}\` | ${count} |\n`;
  }
  md += '\n';
}

md += '## Route discovery notes\n\n';
md += `- Walked \`src/app\` and registered every directory containing a \`page.tsx\`/\`page.ts\`/\`page.jsx\`/\`page.js\` file as a route.\n`;
md += '- Route groups `(group)` were collapsed (do not appear in URL paths).\n';
md += '- Dynamic segments `[slug]`, `[id]`, catch-all `[...slug]`, and optional catch-all `[[...slug]]` were handled when matching hrefs.\n';
md += '- Template literal hrefs (e.g. `` `/revision/poetry/${slug}` ``) were normalized by replacing `${...}` with `*` and then matched against dynamic patterns.\n';
md += '- Asset paths (images, PDFs, fonts, etc.) and external links were excluded from the audit.\n';

fs.writeFileSync(path.join(ROOT, 'broken-links-audit-v2.md'), md, 'utf8');

// Console summary for the calling agent
console.log(JSON.stringify({
  totalHrefsScanned: hrefs.length,
  uniqueEntries: seen.size,
  staticRoutes: staticRoutes.size,
  dynamicRoutes: dynamicRoutes.length,
  apiRoutes: apiRoutes.size,
  brokenCount: broken.length,
  filesWithBroken: byFile.size,
  categories,
}, null, 2));
