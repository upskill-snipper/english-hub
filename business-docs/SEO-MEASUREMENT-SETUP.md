# SEO Measurement Setup — Search Console & Bing Webmaster

**Audience:** Calum (founder), first-time setup
**Last updated:** 2026-05-01
**Estimated time:** ~30 minutes total (both tools)

---

## TL;DR

You're going to register `theenglishhub.app` with two free webmaster tools — Google Search Console (GSC) and Bing Webmaster Tools — so you can see how the site is being indexed, which queries surface it, and whether anything is broken. You'll prove you own the site by adding a verification meta tag to the page `<head>`, then submit your sitemap so the crawlers know which pages to look at. This unlocks ongoing SEO measurement (impressions, click-through rate, indexing coverage, Core Web Vitals) and is the prerequisite for every other SEO improvement that follows. Budget ~30 minutes end to end. Screenshot every step for your records — this doc is text-only.

---

## Prerequisite — environment variables

The site is wired to read two env vars from `src/app/layout.tsx`:

- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` — renders `<meta name="google-site-verification" content="...">`
- `NEXT_PUBLIC_BING_SITE_VERIFICATION` — renders `<meta name="msvalidate.01" content="...">`

Each meta tag is gated on the env var being non-empty (this mirrors the existing Trustpilot pattern — if the var is unset, no tag is rendered, so production stays clean until you flip them on).

You'll need to add the values in **two places**:

1. **`.env.local`** — optional, only if you want to test locally. Add the lines:
   ```
   NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=
   NEXT_PUBLIC_BING_SITE_VERIFICATION=
   ```
   (You can leave the values empty for now and fill them in once you have them from each tool below.)

2. **Vercel Project Settings → Environment Variables → Production** — required for the live site. This is where the production build picks them up.

> **Critical:** After you add or change env vars in Vercel, **Vercel does NOT auto-redeploy.** You must trigger a redeploy yourself:
> - Go to **Deployments** in the Vercel dashboard
> - Find the latest production deployment
> - Click the three-dot menu (...) on the right
> - Click **Redeploy**
> - Confirm
>
> Wait ~2 minutes for the build to finish before clicking "Verify" in either tool.

---

## Step 1 — Google Search Console verification

1. Go to **https://search.google.com/search-console**
2. Sign in with the Google account you want to own the property (use the founder account, not a personal one).
3. Click **Add property** (top-left dropdown if you already have other properties, otherwise the big button on the welcome screen).
4. You'll see two choices: **Domain** and **URL prefix**. Choose **URL prefix** (NOT Domain).
   - *Why:* "Domain" requires DNS verification, which is fiddlier. "URL prefix" lets us use the simpler meta-tag method.
5. Paste `https://theenglishhub.app` into the URL field.
6. Click **Continue**.
7. On the verification screen, expand the **HTML tag** section (you may need to click "Other verification methods" first if it defaults to a different option).
8. Google shows you a meta tag like:
   ```html
   <meta name="google-site-verification" content="ABC123randomstring..." />
   ```
   Copy ONLY the `content="..."` value — the long random string between the quotes. Do NOT copy the full `<meta>` tag.
9. Open Vercel → your project → **Settings** → **Environment Variables**.
10. Add a new variable:
    - **Key:** `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
    - **Value:** the string you just copied
    - **Environment:** check **Production** (also Preview/Development if you want, but Production is the one that matters)
11. Click **Save**.
12. Trigger a Vercel redeploy (Deployments tab → latest production deploy → ... menu → **Redeploy** → confirm).
13. Wait ~2 minutes for the deploy to finish. You can watch the Deployments tab — when the latest entry shows a green "Ready" status, you're good.
14. Back in Google Search Console, click **Verify**.
15. You should see "Ownership verified". Click **Go to property**.

**If verification fails:**
- Open `https://theenglishhub.app/` in a browser, right-click → **View page source**, and search (Ctrl+F) for `google-site-verification`.
- The meta tag should be there with your token as the value.
- If the tag is missing: confirm the env var is set in Vercel for the **Production** environment, and confirm the redeploy actually completed (not just queued).
- If the tag is there but Google still won't verify: wait 5 minutes and try again. Sometimes propagation lags.

**Screenshot:** the "Ownership verified" green tick screen.

---

## Step 2 — Submit sitemap to Search Console

1. In the GSC left sidebar, click **Sitemaps**.
2. In the "Add a new sitemap" field, paste `sitemap.xml` (just the relative path — GSC prepends `https://theenglishhub.app/` automatically; you'll see a preview of the full URL).
3. Click **Submit**.
4. Confirm the row appears in the "Submitted sitemaps" list with **Status: Success**.
5. The first crawl typically takes 1–7 days. The "Discovered URLs" count will populate within ~24 hours.

**Screenshot:** the Sitemaps page with the green "Success" status row.

---

## Step 3 — Set international targeting

Tells Google your primary audience is in the UK, which influences ranking for UK-based searches.

1. In GSC, click **Settings** in the left sidebar (gear icon at the bottom).
2. Click **International targeting**.
3. On the **Country** tab, check **Target users in:** and select **United Kingdom**.
4. Click **Save**.

**Note:** This option may be deprioritised in newer GSC builds. If you can't find it under Settings, look under **Legacy tools and reports**. If it's not available at all, skip this step — modern GSC infers geo intent from `hreflang` and content signals.

---

## Step 4 — Bing Webmaster verification

Bing makes this much easier than Google because you can import directly from Search Console.

1. Go to **https://www.bing.com/webmasters**
2. Sign in (Microsoft account; you can sign in with Google if needed).
3. Click **Add a site** (or **Add your site** on the welcome screen).
4. You'll see two big tiles: **Import your sites from Google Search Console** and **Add your site manually**.
5. Click **Import your sites from Google Search Console** — this saves you the meta-tag dance.
6. Click **Continue** to authorize. A Google OAuth consent screen pops up.
7. Sign in with the **same Google account** you used for GSC and approve the consent.
8. Bing pulls in the list of properties from GSC. Select `https://theenglishhub.app` (uncheck any other sites you don't want imported).
9. Click **Import**.
10. The site is verified automatically — you'll see it appear in your Bing Webmaster dashboard with a green status.

**Optional fallback (only if GSC import fails for any reason):**

If Bing rejects the import or you don't want to authorise OAuth, fall back to meta-tag verification:

1. Choose **Add your site manually** instead.
2. Enter `https://theenglishhub.app` and click **Add**.
3. Pick the **HTML Meta Tag** verification method.
4. Copy the `content="..."` value from the meta tag Bing shows you (looks like `<meta name="msvalidate.01" content="...">`).
5. Add it to Vercel as `NEXT_PUBLIC_BING_SITE_VERIFICATION` (Production environment).
6. Trigger a Vercel redeploy. Wait ~2 minutes.
7. Back in Bing Webmaster, click **Verify**.

**Screenshot:** the Bing Webmaster dashboard showing your site with the green verified status.

---

## Step 5 — Submit sitemap to Bing Webmaster

1. In Bing Webmaster, with `theenglishhub.app` selected as the active site, click **Sitemaps** in the left sidebar.
2. Click **Submit sitemap** (top-right).
3. In the dialog, paste `https://theenglishhub.app/sitemap.xml` — note: Bing wants the **full URL**, not just the relative path (different from GSC).
4. Click **Submit**.
5. Confirm the row shows **Status: Submitted** (or "Success" depending on the UI version). It may say "Pending" briefly while Bing fetches it.

**Screenshot:** the Sitemaps page with the submitted row.

---

## Step 6 — Verify both verifications survive a deploy

A common pitfall: an env var gets removed during a config change and the verification meta tag disappears, which silently de-verifies you. Sanity-check:

1. After your next code push (any push, not a special one), wait for the Vercel deploy to go live.
2. Open `https://theenglishhub.app/` in a browser.
3. Right-click → **View page source**.
4. Press Ctrl+F and search for:
   - `google-site-verification` — should match a meta tag with your GSC token.
   - `msvalidate.01` — should match a meta tag with your Bing token (only if you used the meta-tag fallback; if you imported from GSC, this one is optional).
5. If either is missing, check Vercel env vars and re-trigger a deploy.

Do this check once a quarter as a habit, or any time you reconfigure environment variables in Vercel.

---

## What to expect

- **GSC impressions data:** appears within 24–72 hours of verification.
- **Indexing:** most pages take 1–7 days to be fully indexed.
- **Sitemap status:**
  - "Discovered URLs" count populates within ~24 hours.
  - "Submitted URLs" mostly indexed within 14 days.
- **Coverage report:** surfaces any indexing issues — watch for:
  - **"Crawled — currently not indexed"** warnings on thin pages (low word count, duplicate content, low value). Address by beefing up the page or adding `noindex` if intentional.
  - **"Discovered — currently not indexed"** means Google saw the URL but hasn't crawled it yet. Usually self-resolves; if persistent, request indexing manually for high-priority URLs.
- **Page Experience report:** Core Web Vitals data starts appearing once enough real-user data is collected — typically 28 days post-launch.
- **Bing:** generally lags Google by a few days on indexing, but uses the same signals. Don't panic if Bing shows zero impressions for the first week.

---

## Common issues and fixes

### "Verification failed: meta tag not found"
- Confirm the Vercel deploy actually completed (Deployments tab → latest entry shows green "Ready", not "Building" or "Error").
- View-source the homepage and Ctrl+F for `google-site-verification` (or `msvalidate.01`).
- If the env var is set but the tag isn't rendering, check `src/app/layout.tsx` to make sure the conditional render is correct (the tag should only render when the env var is non-empty).
- If you just changed the env var, Vercel does **not** auto-redeploy. You must trigger one manually.

### "Sitemap couldn't fetch" (Google) or "Sitemap could not be downloaded" (Bing)
- Manually visit `https://theenglishhub.app/sitemap.xml` in a browser.
- It should return well-formed XML starting with `<?xml version="1.0"...?>` and contain `<urlset>` with `<url>` entries.
- If it returns 404 or HTML, the route is broken — check `src/app/sitemap.ts`.
- If it returns valid XML but the tools still can't fetch, wait 24 hours and retry. Transient fetch failures are common on first submission.

### "Indexed though blocked by robots.txt"
- Means a URL listed in your sitemap is also disallowed in `robots.txt`. The two are inconsistent.
- Audit `src/app/robots.ts` (the disallow rules) against `src/app/sitemap.ts` (the included URLs) and reconcile — usually the fix is to remove the URL from the sitemap (if it's genuinely meant to be blocked) or remove the disallow (if it was a mistake).

### "Soft 404"
- Google fetched the page but it looks empty / placeholder-ish. Check the page actually has unique, substantive content. Often happens on auto-generated pages with `Coming soon` placeholders.

### "Duplicate without user-selected canonical"
- Two URLs return the same content and you haven't told Google which is canonical. Add `<link rel="canonical" href="...">` in the page metadata, or set up 301 redirects.

---

## Maintenance

- **Weekly (especially first 12 weeks):** check GSC dashboard for new coverage warnings, manual actions, security issues. ~5 minutes.
- **Email alerts:** in GSC, go to **Settings → Users and permissions → Email preferences** and subscribe to all alert types ("Coverage issues detected", "Manual actions", "Security issues"). Same in Bing under **Settings → Notifications**.
- **Monthly:** review the **Performance** tab. Export top-100 queries to a CSV and track:
  - Average position (lower = better)
  - CTR (higher = better — if a query has high impressions but low CTR, the title/meta description is underperforming)
  - Impressions trend (week-over-week, month-over-month)
  - New queries appearing (signals content gaps you can write into)
- **Quarterly:** re-run Step 6 to confirm verification meta tags are still rendering. Re-submit sitemap if you've made significant URL structure changes.

---

## Quick reference

| Tool | URL | Sitemap format |
|------|-----|----------------|
| Google Search Console | https://search.google.com/search-console | `sitemap.xml` (relative) |
| Bing Webmaster Tools | https://www.bing.com/webmasters | `https://theenglishhub.app/sitemap.xml` (full URL) |

| Env var | Renders | File |
|---------|---------|------|
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | `<meta name="google-site-verification" content="...">` | `src/app/layout.tsx` |
| `NEXT_PUBLIC_BING_SITE_VERIFICATION` | `<meta name="msvalidate.01" content="...">` | `src/app/layout.tsx` |

---

**Done?** You should now have:
- Both tools verified
- Sitemap submitted and accepted in both tools
- UK targeting set in GSC
- Email alerts subscribed
- Screenshots of every "verified" / "submitted" state filed in your records

That's the full setup. From here, the playbook is to check GSC weekly and act on Coverage warnings as they appear.
