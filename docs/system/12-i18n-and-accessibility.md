# Internationalisation and accessibility

This chapter covers how a string reaches a reader in their language, and how a page reaches a reader who cannot use a mouse or a screen. The two sit together because they fail together: the site ships ~16,800 dictionary keys in three locales, and the same pass that localised the interface left the direction-sensitive layout, the landmark structure and the ARIA labels behind. Read this before you add a locale, add a dictionary key, or touch `src/middleware.ts`.

The load-bearing facts are: **the shard chain order decides which copy wins**, **the client never reads the dictionary** (it reads generated flat maps), and **the `/ar` URL surface is a middleware rewrite, not a route directory** - which is why it once skipped the auth wall and still skips several other things.

---

## 1. Three locales, and what each one actually is

|                        | `en`                     | `ar`                                                             | `es`                                         |
| ---------------------- | ------------------------ | ---------------------------------------------------------------- | -------------------------------------------- |
| Interface (dictionary) | 16,821 keys              | 16,448 translated, 373 fall back to EN                           | 16,216 translated, 605 fall back to EN       |
| Study content          | all of it                | 40 `<slug>.ar.mdx` blog posts, thousands of `*Ar` content fields | **none** - zero `.es.mdx`, zero `*Es` fields |
| AI feedback            | English                  | Khaleeji, via `withArabicDirective()`                            | English                                      |
| URL surface            | root                     | `/ar/...` (middleware rewrite)                                   | **none** - `/es` is a 404                    |
| `<html>`               | `lang="en-GB" dir="ltr"` | `lang="ar" dir="rtl"`                                            | `lang="es" dir="ltr"`                        |
| In sitemap             | yes                      | `/ar/blog/<slug>` only                                           | n/a                                          |

Counts above are measured from the committed maps in [`src/lib/i18n/generated/`](../../src/lib/i18n/generated); "falls back to EN" means `lookup(key, locale)` returns the same string as `lookup(key, 'en')` ([`dictionary.ts:25112-25127`](../../src/lib/i18n/dictionary.ts)). Read that label loosely rather than as a translation backlog: only 7 of the 373 Arabic cases are an empty `ar` value, and the other 366 carry an `ar` string deliberately identical to the English - board codes, spec numbers, brand names and set-text titles such as `AQA GCSE English Literature (8702)`. No entry in the chain is missing its `ar` or `es` property outright, so a count of absent properties returns zero and is not the measure used here.

Measure this key by key, never line by line. The generated maps are prettier-formatted, so a long entry puts the key alone on one line and its value on the next (3,068 such entries in `en.ts`, 2,568 in `ar.ts`). Diffing the two files line-by-line counts every one of those key-only lines as a match and reports 2,889 for `ar` instead of 373.

**Spanish is interface-only, and that is a decision, not an omission.** The reasoning is recorded at [`src/middleware.ts:33-71`](../../src/middleware.ts). A `/es` branch would be a dozen lines copied from the `/ar` branch, and it was deliberately not written: a URL surface is an indexable, hreflang-eligible promise that the page behind it is in that language, and for Spanish the _product_ - the study material - is entirely English. Routing `/es` would put Spanish-labelled URLs into Google's Spanish index for English content.

Five preconditions are listed there before `/es` may be routed. Do not treat them as advisory.

1. Spanish study content that actually exists (`.es.mdx` posts, `*Es` fields, or a pipeline that fills them).
2. An `es` branch in [`src/lib/i18n/ai-language-directive.ts`](../../src/lib/i18n/ai-language-directive.ts), so AI feedback is Spanish.
3. A `/es` middleware branch mirroring `/ar` **including** the 2026-08-23 auth fix (section 5).
4. hreflang alternates updated in the same change ([`src/app/layout.tsx:85-95`](../../src/app/layout.tsx)).
5. [`src/__tests__/spanish-locale-claims.test.ts`](../../src/__tests__/spanish-locale-claims.test.ts) revisited - it asserts the interface-only wording in the cookie policy and the language tooltip, and that wording becomes a lie the day Spanish content ships. Its last test is a forward guard: if a `/es` branch ever appears, the test fails on purpose.

Bilingual mode (`bi`, stacked EN+AR) was removed in May 2026 because the stacked layout did not render on dense pages. Legacy `eh-lang=bi` cookies are coerced to `en` in four separate places - middleware, [`use-t.ts`](../../src/lib/i18n/use-t.ts), [`use-locale.ts`](../../src/lib/i18n/use-locale.ts), [`language-toggle.tsx`](../../src/components/layout/language-toggle.tsx) - each with its own regex. The keys `lang.bi` and `lang.bi.tooltip` are still in the dictionary and are dead.

---

## 2. The dictionary: 80 shards and a precedence chain

[`src/lib/i18n/dictionary.ts`](../../src/lib/i18n/dictionary.ts) is 25,000 lines and 1.5 MB. It is the head of a chain of **80** shard objects declared at [`dictionary.ts:24961`](../../src/lib/i18n/dictionary.ts) as `DICTIONARY_CHAIN`. `lookup()` at [line 25112](../../src/lib/i18n/dictionary.ts) walks that array and takes the **first** shard where the key is non-null.

```
80 shards - 18,990 defined entries - 16,821 distinct keys
    => 2,169 entries are shadowed and never render
```

`Dictionary` is `Record<string, { en: string; ar?: string; es?: string }>` ([line 156](../../src/lib/i18n/dictionary.ts)). A missing `ar`/`es` falls back to `en`; a missing key returns the sentinel `[[key.path]]`, which is deliberate - it renders visibly rather than breaking layout, and it is greppable.

### Why the order is load-bearing: the AUDIT_FIX shadowing incident

[`dictionary-audit-fix.ts`](../../src/lib/i18n/dictionary-audit-fix.ts) was auto-generated by a script outside this repo (its header names `D:\AI-Agent-Server\...\fix_missing_keys.py`) to fill ~1,271 keys that components referenced but the dictionary lacked, so Arabic mode was rendering `[[key]]` everywhere. Its **English** values are best-guesses derived from the key's last path segment - `about.verified.h1` became `"H1"`, `about.verified.badge` became `"Badge"`. Its Arabic values came from a local Ollama run. It holds 1,590 entries.

Until 2026-05-16, `PLACEHOLDER_FIX_MAY15` and `SCREENSHOT_FIX_DICTIONARY` were listed **after** `AUDIT_FIX_DICTIONARY` in the chain. Because first-match wins, ~80 affiliate keys and 94 screenshot keys resolved to the junk placeholder instead of the real copy written for them. That is why `/affiliate` and `/affiliates` shipped reading "Heading", "Name", "Desc", "Lead". The fix moved every hand-written shard above `AUDIT_FIX`; the comment at [`dictionary.ts:24941-24959`](../../src/lib/i18n/dictionary.ts) says `ORDER IS LOAD-BEARING - DO NOT REORDER`, and it means it.

### Where the chain stands now

| Shard                       | Entries defined | Keys it actually wins |
| --------------------------- | --------------- | --------------------- |
| `DICTIONARY` (master)       | -               | 6,314                 |
| `PRESS_AND_VERIFIED_FIX`    | 111             | **0**                 |
| `PLACEHOLDER_FIX_MAY16`     | 39              | 1                     |
| `PLACEHOLDER_FIX_MAY15`     | 291             | 4                     |
| `SCREENSHOT_FIX_DICTIONARY` | 94              | 92                    |
| `REPORT_FIX_MAY16B`         | 138             | **0**                 |
| `AUDIT_FIX_DICTIONARY`      | 1,590           | **7**                 |

`PRESS_AND_VERIFIED_FIX` and `REPORT_FIX_MAY16B` are **completely dead** - 249 entries between them, every one shadowed by a curated shard earlier in the chain. They look live (imported, listed, commented) and are not. `PLACEHOLDER_FIX_MAY15` is 291 entries serving 4 surviving keys.

The seven keys still resolving from `AUDIT_FIX` are the junk shape exactly: `school.analytics.avg_score_suffix` gives `"Avg Score Suffix"`, `school.analytics.stat.at_risk_sub` gives `"At Risk Sub"`, `analytics.cohort.col.initial_mrr` gives `"Initial Mrr"`. Their Arabic and Spanish values are real translations; only English is junk. **None of the seven has a render site** - I grepped all seven and found them only in the generated maps - so no user currently sees them. The correct fix is to delete them, not to write English for them.

### Adding a key

Put it in a shard that already owns its namespace, or in a new shard imported **above** the placeholder/audit tier. Then run `npm run i18n:generate` and commit the regenerated files (section 3). Never edit `src/lib/i18n/generated/*.ts` by hand.

---

## 3. The generated flat maps, and the 3.8 MB chunk that forced them

[`src/lib/i18n/generated/{en,ar,es}.ts`](../../src/lib/i18n/generated) are flat `Record<string, string>` maps with the chain precedence and the English fallback **already resolved**. They exist because of a specific, measured production defect, written up at [`use-t.ts:38-52`](../../src/lib/i18n/use-t.ts) and [`scripts/generate-i18n-locales.mjs:5-27`](../../scripts/generate-i18n-locales.mjs):

`use-t.ts` is a `'use client'` module. It used to `import { lookup } from './dictionary'`. `header.tsx` calls `useT()`, the root layout shell renders the header, so every route's client graph pulled the whole trilingual dictionary: **one shared chunk of 3,801,191 bytes raw / 1,080,352 gzipped, referenced by 1,237 of 1,238 page manifests.** An English reader downloaded and parsed every Arabic and Spanish string on the site before the page could hydrate.

The generator does **not** parse the dictionary sources. It transpiles the ~80 `dictionary*.ts` files to CommonJS in a temp directory using the TypeScript compiler API (`compileToTemp`, [line 66](../../scripts/generate-i18n-locales.mjs)), requires the real module, and calls the real `lookup(key, locale)` for every key from the real `allDictionaryKeys()`. That is the whole design argument: a hand-written parser would be a second, drift-prone implementation of the precedence rules. Output order follows chain order, so regeneration produces no spurious diff. It strips the BOM from `dictionary.ts` (which carries one) and pins `{"type":"commonjs"}` in the temp directory so Node does not inherit an ancestor `package.json` and reject `exports`.

**The generated files are committed on purpose.** `npm run dev` does not run `prebuild`, so without committed maps a newly added key renders `[[key]]` in local development.

`use-t.ts` imports English **statically** and `ar`/`es` **dynamically** ([line 87](../../src/lib/i18n/use-t.ts)). English cannot be lazy: `useT()` resolves header and nav labels during render, and a purely dynamic import would flash raw `[[keys]]` on first paint. Three details in that file are subtle, and each was written for a reason:

- **Module-evaluation-time fetch.** `ensureLocale(readLocale())` runs at import, not in an effect, so an Arabic or Spanish reader's chunk request overlaps hydration and the English-fallback window is as short as it can be.
- **An explicit subscriber set.** A lazily loaded map arrives outside React's knowledge; `setLocale()` alone would not re-render, because the locale value has not changed. Hence `notify()` and the `revision` reducer, which is a `useCallback` dependency **on purpose**.
- **`typeof value === 'string'`, not `!== undefined`** ([line 150](../../src/lib/i18n/use-t.ts)). The maps are plain object literals, so a key colliding with an `Object.prototype` member (`constructor`, `toString`, `valueOf`) reads back as an inherited **function**. About 18 call sites build keys at runtime and some call `.charAt()` on the result, so a non-string return would throw instead of degrading to the sentinel. The old `lookup()` could not hit this, because it read `.en` off the matched entry.

A failed chunk fetch is swallowed: the locale stays unresolved and `t()` serves English rather than `[[key]]`. Degraded copy beats broken-looking UI, and a retry is allowed on the next language change.

**The standing hazard, stated in the file:** do not reintroduce _any_ import from `./dictionary` into `use-t.ts`, not even `import type { Locale }`. A type-only import is erased, but the moment someone converts it to a value import the 3.8 MB chunk is back on every route. That is why the `Locale` union is re-declared locally in both `use-t.ts` and `use-locale.ts`. Two client components still carry a type-only dictionary import and are the likeliest place for that mistake: [`src/components/study/InteractivePoemViewer.tsx:7`](../../src/components/study/InteractivePoemViewer.tsx) and [`src/app/resources/revision-notes/macbeth/page.tsx:5`](../../src/app/resources/revision-notes/macbeth/page.tsx).

---

## 4. `t()` server-side, `useT()` client-side

| Helper               | File                                                | Use                      | Notes                                                                                                |
| -------------------- | --------------------------------------------------- | ------------------------ | ---------------------------------------------------------------------------------------------------- |
| `t(key)`             | [`t.ts:57`](../../src/lib/i18n/t.ts)                | async, server components | Reads the `x-lang` header; `headers()` is per-request cached so N calls are effectively free         |
| `tMany(keys[])`      | [`t.ts:67`](../../src/lib/i18n/t.ts)                | async, server            | Resolves the locale once. 68 pages use it - the array-destructuring-over-a-key-list pattern          |
| `tSync(key, locale)` | [`t.ts:77`](../../src/lib/i18n/t.ts)                | sync, server             | For callers that already hold a locale. 10 call sites                                                |
| `getLocale()`        | [`t.ts:48`](../../src/lib/i18n/t.ts)                | async, server            | For pages choosing between `detail`/`detailAr` style content fields. 7 call sites                    |
| `useT()`             | [`use-t.ts:118`](../../src/lib/i18n/use-t.ts)       | `'use client'`           | Reads the `eh-lang` cookie. 450 files                                                                |
| `useLocale()`        | [`use-locale.ts`](../../src/lib/i18n/use-locale.ts) | `'use client'`           | Locale only, no lookup                                                                               |
| `pickLocaleField()`  | [`t.ts:53`](../../src/lib/i18n/t.ts)                | -                        | **Dead.** Zero call sites; only a comment at `blog/[slug]/page.tsx:219` calls it "the house pattern" |

`t()` falls back to `'en'` when `headers()` throws, which happens at build time on fully static pages. Those pages render statically in English; per-request rendering sees the real locale.

`useT()`'s first render is **always** `'en'` on both server and client ([line 120](../../src/lib/i18n/use-t.ts)). The cookie is not readable during SSR, so seeding from it would hydration-mismatch. The real locale arrives in an effect.

Roughly 726 of 1,043 `page.tsx` files import one of these helpers. The remainder render English inline.

---

## 5. The cookie, the header and the `/ar` URL surface

`eh-lang` is the single persistence mechanism, written by [`language-toggle.tsx`](../../src/components/layout/language-toggle.tsx) as `path=/; max-age=1y; samesite=lax`. On change the toggle does three things: writes the cookie, dispatches `window.dispatchEvent(new CustomEvent('eh-lang-change', { detail }))` for client components in the same tab, and calls `router.refresh()` so the server re-renders with the new header. Cookie writes do not fire `storage` events, which is why the custom event exists.

Resolution order in [`src/middleware.ts:568-608`](../../src/middleware.ts):

1. `/ar/...` or `/ar` URL prefix gives `ar`, plus `x-lang-source: url`
2. the `eh-lang` cookie, if its value is in `LANG_VALUES` (`en`, `ar`, `es`)
3. `en`

The result is stamped on the **request** headers as `x-lang`, which [`layout.tsx:139-146`](../../src/app/layout.tsx) reads to set `<html lang dir>` before first paint, so there is no flash of wrong-direction content. The URL prefix wins over the cookie because `/ar/...` is the canonical shareable surface. Arabic needs a URL surface at all because Googlebot crawls cookieless, so a cookie-only mode is never indexed for that language.

There is **no `src/app/ar` directory**. `/ar/foo` is a `NextResponse.rewrite` to `/foo` with `x-lang` pre-stamped, so every route is reachable in Arabic without duplicating a single page. That trick is the source of the whole family of `/ar` defects below.

### The auth bypass

Until 2026-08-23 the `/ar` branch returned the rewrite **before** calling `updateSession`. The Arabic surface therefore skipped the Supabase session refresh, the forced-password-rotation gate and the protected-route auth wall: `/ar/dashboard`, `/ar/account`, `/ar/school` and `/ar/admin` were reachable simply by prefixing a URL with `/ar`. The fix is at [`middleware.ts:580-597`](../../src/middleware.ts) - call `updateSession(request, strippedPath)`, honour a 3xx from it, and copy any refreshed auth cookies onto the rewrite response or a token refresh performed during that request is lost and the next request looks unauthenticated. `updateSession` grew its `effectivePathname` parameter for exactly this ([`src/lib/supabase/middleware.ts:30-47`](../../src/lib/supabase/middleware.ts)): even once called, the raw path `/ar/dashboard` would not have matched `/dashboard` in the protected-route list.

### What the `/ar` branch still skips

The branch returns at [line 601](../../src/middleware.ts), before the rest of `middleware()` runs. Nothing below that point happens on an `/ar` response.

| Skipped                              | Where it would have run                        | Consequence                                                                                                                                                                                                                                                                                                         |
| ------------------------------------ | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Per-request CSP with nonce           | [`middleware.ts:634`](../../src/middleware.ts) | `/ar/...` responses carry **no `Content-Security-Policy` at all**. Server components still stamp `nonce=` on inline JSON-LD from the `x-nonce` request header, referencing a policy that is never sent. The static headers in `next.config.js:196` (XFO, nosniff, Referrer-Policy, HSTS, COOP, CORP) do still apply |
| `Permissions-Policy: payment=(self)` | [`middleware.ts:648`](../../src/middleware.ts) | falls back to the weaker static policy in `next.config.js`                                                                                                                                                                                                                                                          |
| `applyAffiliateTracking`             | [`middleware.ts:657`](../../src/middleware.ts) | a `?ref=` param on an `/ar` URL sets no affiliate cookie                                                                                                                                                                                                                                                            |

Two more of the same shape, earlier in the file:

- **The board gate runs on the raw path.** `isBoardRequired()` ([`middleware.ts:236`](../../src/middleware.ts)) prefix-matches `pathname`, which here is `/ar/revision/...`, so it never matches `/revision/`. Board-gated study routes are not gated on the Arabic surface. This is a product gate rather than a security one, but it is the same defect family.
- **`RootLayoutShell` reads `usePathname()`**, which reflects the browser URL, so `/ar/school` would not match its `FULL_LAYOUT_PREFIXES` and the root header and footer would render on top of the school layout's own chrome. I have **not** run this to confirm what Next returns for `usePathname()` under a middleware rewrite - verify in a browser before acting on it.

`Content-Language: ar` is set only on the `/ar` rewrite ([line 599](../../src/middleware.ts)). Cookie-mode Arabic sends no `Content-Language` at all.

### Related `/ar` behaviour worth knowing

- **Phantom `.ar` blog URLs.** Until Aug 2026 `listMdxSlugs()` listed `<slug>.ar.mdx` files as standalone slugs, so Google indexed ~40 `/blog/<slug>.ar` URLs serving Arabic bodies inside English chrome. [`middleware.ts:498-503`](../../src/middleware.ts) now 308s them to `/ar/blog/<slug>` so link equity and bookmarks survive.
- **hreflang on blog posts is done properly.** [`blog/[slug]/page.tsx:112-125`](../../src/app/blog/[slug]/page.tsx) emits a real `en-GB`/`ar`/`x-default` cluster when the post has an Arabic variant, and self-canonicalises to `/ar/blog/<slug>` only when `x-lang-source === 'url'`. Cookie-toggled Arabic on a `/blog/...` URL is invisible to cookieless crawlers, so the English canonical is the truthful one there.
- **Stale comment.** [`layout.tsx:87-91`](../../src/app/layout.tsx) justifies the English-only root hreflang cluster with "there is no /ar route directory and no /ar URLs in the sitemap". The first half is true; the second is now false - [`src/app/sitemap.ts:122-130`](../../src/app/sitemap.ts) adds `/ar/blog/<slug>` for every post with an Arabic variant. The behaviour is still defensible (there is no `/ar` homepage to alternate to); the stated reason is not.
- **Stale comment, again.** [`middleware.ts:602-605`](../../src/middleware.ts) says "LANG_VALUES only contains 'en'|'ar' now" two lines above a `LANG_VALUES` that contains `es`.

---

## 6. The drift guard, and why it cannot fail where you think

The guard is [`scripts/verify-i18n-locales.mjs`](../../scripts/verify-i18n-locales.mjs). It asserts, for every key and every locale, that `generated[locale][key] === lookup(key, locale)`, and it also fails on keys present in a generated map but absent from the dictionary (stale copy with no source of truth). It loads both sides through the TypeScript compiler, never by re-parsing.

```
npm run i18n:generate   # rewrite the three maps from the live dictionary
npm run i18n:verify     # assert the COMMITTED maps match lookup()
```

**Run `i18n:verify` on its own.** In the `prebuild` chain ([`package.json:12`](../../package.json)) it runs _after_ `generate`, which has just rewritten the files - so verify compares freshly generated output against the source it was generated from, and can essentially never fail there. The real staleness signal during a build is the generator's own `console.warn`: "committed locale map(s) were out of date and have been rewritten". A warning does not fail a build, so **stale committed maps reach production as one line in the Vercel log and nothing else** - and local `npm run dev`, which never runs `prebuild`, keeps serving the stale copy until someone regenerates.

CI ([`.github/workflows/ci.yml`](../../.github/workflows/ci.yml)) runs `check-placeholders`, `next lint`, `tsc --noEmit` and `npm test`. It does **not** run `i18n:verify`. The only i18n assertion in the test suite is the three-key generated-map check inside `spanish-locale-claims.test.ts`.

[`scripts/check-copy-quality.mjs`](../../scripts/check-copy-quality.mjs) is the house-style linter for user-facing copy - British English, banned claims, two deliberately different zones (`chrome` strict because it is the product's own voice, `content` warnings-only because the teaching corpus legitimately quotes primary texts). It has **no npm script and sits in no pipeline**; run it manually as `node scripts/check-copy-quality.mjs [--warn|--json|--zone=chrome]`.

`scripts/emit-locale-dicts.ts.bak` is a superseded earlier attempt at the generator. Ignore it.

---

## 7. Surfaces that hard-code a locale list

These silently serve English to a Spanish reader. Some are correct by outcome, because there is no Spanish content to serve, but none is correct by construction, and every one is a place a future `es` rollout will leak.

| Pattern                                                                           | Where                                                                                                                                                                                                         | Effect                                                                                                                                                                 |
| --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `x-lang === 'ar' ? 'ar' : 'en'` assigned to an unused `_lang`                     | 41 `page.tsx` files under `/resources`, `/legal`, `/analysis`                                                                                                                                                 | Vestigial - residue of an automated Arabic sweep. In about 20 of them `_lang` feeds a local `_tr()` helper that scans an `_EAL_STRINGS` object; in the rest it is dead |
| The same ternary, live                                                            | [`blog/page.tsx:106`](../../src/app/blog/page.tsx), [`blog/[slug]/page.tsx:69-74`](../../src/app/blog/[slug]/page.tsx), [`school/lessons/page.tsx:58`](../../src/app/school/lessons/page.tsx), `eal/[slug]/*` | Correct today, since no `*Es` content fields exist                                                                                                                     |
| `resolveLocaleFromRequest()` typed `'en' \| 'ar' \| 'es'` with **no `es` branch** | [`ai-language-directive.ts:24-32`](../../src/lib/i18n/ai-language-directive.ts)                                                                                                                               | A typed lie: the signature promises `es`, the body cannot produce it. This is precondition 2 for routing `/es`                                                         |
| Cookie regex that omits `es` entirely                                             | [`InteractivePoemViewer.tsx:12`](../../src/components/study/InteractivePoemViewer.tsx), `/eh-lang=(en\|bi\|ar)\b/`                                                                                            | Spanish reader gets `en`, for the wrong reason                                                                                                                         |
| `pickLocaleField(locale, en, ar)`                                                 | [`t.ts:53`](../../src/lib/i18n/t.ts)                                                                                                                                                                          | Two-locale by signature. Dead, so harmless - delete it rather than extend it                                                                                           |

The one surface that does this properly is [`cookie-policy/page.tsx:232-233`](../../src/app/cookie-policy/page.tsx): `getLocale()` plus `const pick = (m: Record<'en' | 'ar' | 'es', string>) => m[locale]`, so the type system forces all three to be supplied. Copy that pattern. Note its strings are inlined rather than dictionary-backed, with the reason given in the file (a parallel workstream owned `dictionary.ts` at the time) - that is a temporary state, not the house pattern.

---

## 8. Accessibility: the statement versus the code

[`/accessibility`](../../src/app/accessibility/page.tsx) is a fully dictionary-driven statement (66 keys resolved through one `tMany` call) targeting **WCAG 2.2 Level AA**, naming the Equality Act 2010 and the Equality Advisory and Support Service. It is dated "prepared on 22 March 2026", six months before the work described in this chapter.

Checked, not assumed:

| The statement says                                                                               | What the code shows                                                                                                                                                                                                                               | Verdict                                                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| "skip to main content link ... bypass repeated navigation"                                       | [`layout.tsx:184-190`](../../src/app/layout.tsx), `sr-only focus:not-sr-only`, targets `#main-content`, label from `a11y.skip_short`                                                                                                              | **True**                                                                                                                         |
| "semantic structure"                                                                             | [`root-layout-shell.tsx:39-45`](../../src/components/layout/root-layout-shell.tsx) renders `<div id="main-content" role="main" aria-label={t('layout.main_content_label')}>`                                                                      | **Partly** - 19 pages inside that div render their own `<main id="main-content">`, see below                                     |
| "WAI-ARIA roles and labels where native HTML semantics are not sufficient"                       | 1,566 `aria-*` attributes, 791 `aria-hidden`, 8 `role="img"` across 446 inline `<svg>`                                                                                                                                                            | **True in substance**                                                                                                            |
| "non-essential animation is reduced ... operating-system preference"                             | [`globals.css:327-337`](../../src/app/globals.css) global `@media (prefers-reduced-motion: reduce)` killing animation, transition and smooth scroll; honoured again in [`AnimatedNumber.tsx:32`](../../src/components/dataviz/AnimatedNumber.tsx) | **True**                                                                                                                         |
| "visible focus indicators throughout"                                                            | `focus-visible:ring-2 ring-ring ring-offset-2` on the shared button, input and link primitives in `globals.css`                                                                                                                                   | **True for the primitives**; not audited per component                                                                           |
| "colours are chosen to target the WCAG 2.2 AA contrast ratios in both themes"                    | no contrast tooling anywhere in the repo                                                                                                                                                                                                          | **Unverified.** "Target" is honest wording, but there is no artefact proving any ratio                                           |
| "internal reviews using automated checks, manual keyboard testing and screen-reader spot-checks" | no `axe`, `jest-axe`, `pa11y` or Lighthouse dependency; no accessibility test file; nothing in CI                                                                                                                                                 | **No evidence in the repo.** If those reviews happen, they happen outside version control. This is the weakest claim on the page |

### The nested-landmark defect

`RootLayoutShell` wraps all non-`/school` children in `<div id="main-content" role="main">`. Nineteen files then render their own `<main id="main-content">` inside it: all of `/ielts/*` (`centre`, `dashboard`, `learn`, `learn/[skill]/[slug]`, `listening`, `progress`, `reading`, `uk-readiness`, `readiness/*`, `mock/_components/MockIntro`, `mock/_components/MockReport`), all of `/toolkit/*` (`my-materials`, `progress`, `revision-builder`, `test-builder`, and `/toolkit` itself, though that exact path redirects to `/revision` via `RETIRED_PAGE_REDIRECTS` at [`middleware.ts:366`](../../src/middleware.ts)), and `/invite/[code]`. Each emits a duplicate `id` and a `main` landmark nested inside a `role="main"`, so a screen reader announces two main regions. The skip link still lands on the outer one. Fix by removing the inner `id` and landmark, not the outer.

### RTL is direction-only

This is the largest gap and the accessibility page does not mention it. `dir="rtl"` is set correctly on `<html>`, which flips text direction, inline flow and the flexbox main axis. It does **not** flip physical CSS properties, and the codebase is built almost entirely from physical ones:

```
ml- / mr- / pl- / pr-    3,864 occurrences
ms- / me- / ps- / pe-       26 occurrences
rtl:  variants               0
[dir=rtl] rules in CSS       0
text-left / text-right     959
left-N / right-N           605
```

Tailwind 3.4 compiles `ml-4` to `margin-left`, which `direction` does not affect. So in Arabic mode every hand-tuned gutter, icon offset, absolutely positioned badge and explicit text alignment stays on its Latin side, and the layout reads as mirrored-but-not-quite. The conversion is mechanical (`ml-` to `ms-`, `pr-` to `pe-`, `text-left` to `text-start`, `left-0` to `start-0`) but it is roughly 5,400 sites and needs visual checking, which nothing here automates.

### The Arabic fonts are declared and never used

[`layout.tsx:64-75`](../../src/app/layout.tsx) loads `Noto_Naskh_Arabic` and `IBM_Plex_Sans_Arabic` through `next/font` with `subsets: ['arabic']`, exposing `--font-arabic-serif` and `--font-arabic-sans` on the `<html>` className. The comment claims browsers "pick them automatically for Arabic codepoints via the unicode-range fallback chain. No JS branching needed".

That is wrong as written. A CSS custom property does nothing until a `font-family` declaration consumes it, and nothing consumes these: `tailwind.config.ts:151-156` hard-codes `['"Geist"', 'ui-sans-serif', ...]` with no Arabic family, [`src/app/globals.css`](../../src/app/globals.css) contains **no `font-family` declaration at all**, and `--font-arabic-*` appears nowhere outside `layout.tsx`. The same mismatch affects the Latin fonts - Tailwind asks for the literal family `"Geist"` while `next/font` registers a generated family name - so Arabic text is most likely rendering in the browser's default Arabic face and Latin text in `ui-sans-serif`. I have **not** opened a browser to confirm what is actually painted; do that first, because the fix differs depending on whether `next/font` is emitting a matching `@font-face` family name.

### Smaller, concrete items

- **Landmark labels are hard-coded English.** [`header.tsx:200`](../../src/components/layout/header.tsx) `aria-label="Main navigation"`, [line 387](../../src/components/layout/header.tsx) `"Mobile navigation"`, [line 580](../../src/components/layout/header.tsx) the exam-board button label. An Arabic screen-reader user hears English landmark names. The dictionary already holds `nav.main`, `layout.region.header` and `layout.region.footer` - all three are **unused**. There are around 75 hard-coded English `aria-label`s in total.
- **The `<footer>` has no `aria-label`** ([`footer.tsx:207`](../../src/components/layout/footer.tsx)), though `layout.region.footer` exists for it.
- **The language toggle itself is good**: `role="group"` with a translated `aria-label`, `aria-pressed` per button, translated `title` tooltips.
- **Images are a non-issue here.** Only 2 `next/image` usages exist in the whole app; the visual language is inline SVG, and `aria-hidden` outnumbers `<svg>` 791 to 446.
- **Contact address.** The statement routes accessibility feedback to `info@Upskillenergy.com` - the parent company rather than a product address, with unusual capitalisation mid-domain. Confirm that mailbox is monitored before the page's "within 5 working days" promise is tested.
- **Claim asymmetry.** `lang.es.tooltip` was corrected to "Spanish mode - interface in Spanish, study material in English" and a test now pins that wording. `lang.ar.tooltip` still says "Arabic mode - content in Arabic (Gulf Khaleeji)" with nothing pinning it, while the Arabic study corpus - set texts, model answers, examiner commentary - is English by design (see the shard comments in `dictionary-study-lang-lit.ts`: chrome only). The Arabic claim deserves the same treatment the Spanish one got.

---

## 9. Before you ship a change here

1. Changed a dictionary shard? Run `npm run i18n:generate` and **commit the three generated files**. Local dev reads the committed ones.
2. Added a shard to `DICTIONARY_CHAIN`? Place it above `PRESS_AND_VERIFIED_FIX` and everything below it, then check it actually wins any keys - two shards in that tail win none at all.
3. Run `npm run i18n:verify` on its own, not as part of a build, or it proves nothing.
4. Touched the `/ar` branch? Re-read section 5 and confirm `updateSession(request, strippedPath)` is still called and its 3xx honoured before any `return`.
5. Adding a locale? All five preconditions at `middleware.ts:56-71`, and expect `spanish-locale-claims.test.ts` to fail on purpose until you revisit the claims it pins.
6. Never write a user-facing string straight into JSX on a surface that already uses `t()`/`useT()` - both the copy linter and the locale maps key off the dictionary.
