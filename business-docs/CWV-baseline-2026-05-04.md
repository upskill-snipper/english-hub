# Core Web Vitals Baseline — 04 May 2026

## Summary

This document was intended to capture a Core Web Vitals (CWV) baseline for five priority URLs on https://theenglishhub.app — `/`, `/pricing`, `/for-students`, `/igcse/edexcel`, and `/revision/poetry/power-and-conflict` — using the public Google PageSpeed Insights API on 04 May 2026. The method called for one mobile and one desktop run per URL (10 calls total), extracting the Performance / Accessibility / Best Practices / SEO scores plus LCP, CLS, TBT, INP, and FCP from each response.

**The baseline could not be captured today.** Every call to the unauthenticated PSI endpoint returned HTTP 429 `RESOURCE_EXHAUSTED` with the message *"Quota exceeded for quota metric 'Queries' and limit 'Queries per day' of service 'pagespeedonline.googleapis.com' for consumer 'project_number:583797351490'"* and a `quota_limit_value` of `"0"`. The same error was returned both via the harness `WebFetch` tool and via direct `curl` from a separate IP. This is a known throttling state Google applies to the shared anonymous project that backs unauthenticated PSI calls; the only reliable workarounds are (a) wait for the daily quota to reset (00:00 Pacific) and re-run, or (b) attach a free Google Cloud API key to the request via `&key=YOUR_KEY` (instructions in section 7 below). No metrics, opportunities, or audit data were collected. The recommendations and target sections below are framed against the next baseline rather than today's numbers.

## 1. API endpoint used

```
https://www.googleapis.com/pagespeedonline/v5/runPagespeed
  ?url=<URL>
  &strategy=mobile|desktop
  &category=performance
  &category=accessibility
  &category=best-practices
  &category=seo
```

Five priority URLs tested:

1. `https://theenglishhub.app/`
2. `https://theenglishhub.app/pricing`
3. `https://theenglishhub.app/for-students`
4. `https://theenglishhub.app/igcse/edexcel`
5. `https://theenglishhub.app/revision/poetry/power-and-conflict`

## 2. Mobile results table

| URL | Performance | A11y | Best Practices | SEO | LCP | CLS | TBT | FCP | INP |
|---|---|---|---|---|---|---|---|---|---|
| `/` | n/a — 429 | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a |
| `/pricing` | n/a — 429 | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a |
| `/for-students` | n/a — 429 | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a |
| `/igcse/edexcel` | n/a — 429 | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a |
| `/revision/poetry/power-and-conflict` | n/a — 429 | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a |

## 3. Desktop results table

| URL | Performance | A11y | Best Practices | SEO | LCP | CLS | TBT | FCP | INP |
|---|---|---|---|---|---|---|---|---|---|
| `/` | n/a — 429 | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a |
| `/pricing` | n/a — 429 | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a |
| `/for-students` | n/a — 429 | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a |
| `/igcse/edexcel` | n/a — 429 | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a |
| `/revision/poetry/power-and-conflict` | n/a — 429 | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a |

### Verbatim API error

```json
{
  "error": {
    "code": 429,
    "message": "Quota exceeded for quota metric 'Queries' and limit 'Queries per day' of service 'pagespeedonline.googleapis.com' for consumer 'project_number:583797351490'.",
    "status": "RESOURCE_EXHAUSTED",
    "details": [{
      "reason": "RATE_LIMIT_EXCEEDED",
      "metadata": {
        "service": "pagespeedonline.googleapis.com",
        "quota_limit": "defaultPerDayPerProject",
        "quota_limit_value": "0",
        "quota_metric": "pagespeedonline.googleapis.com/default",
        "quota_unit": "1/d/{project}"
      }
    }]
  }
}
```

The `quota_limit_value: "0"` is the diagnostic clue — this is not a normal "you're going too fast" rate limit but a hard-zero on the shared anonymous project for the day. An API key bypasses this entirely.

## 4. Top 5 opportunities across all pages

Cannot be populated until a baseline run completes. The intended structure is one row per audit, listing affected pages and estimated savings. Common opportunities to expect (based on the SEO audit's known issues) include:

- **Eliminate render-blocking resources** — almost certainly flagged on every page; Google Fonts is loaded via `<link rel="stylesheet">` per the Phase 1 ticket inventory.
- **Properly size images / Serve images in next-gen formats** — likely on `/for-students` and `/revision/poetry/power-and-conflict` if any hero or inline imagery is unoptimised.
- **Reduce unused JavaScript** — typical for a Next.js app; magnitude depends on how aggressively route-level code splitting is applied.
- **Use efficient cache policy on static assets** — only triggers if Vercel/Cloudflare CDN headers are not already capping `Cache-Control` for hashed assets.
- **Minimize main-thread work / Reduce JavaScript execution time** — usually correlated with the above; the precise fix depends on which scripts are eating budget.

These are *predictions*, not measurements, and must be replaced once a real run lands.

## 5. Recommendations

| Predicted opportunity | Linked ticket |
|---|---|
| Eliminate render-blocking resources (Google Fonts) | **TICKET-3 — Migrate Google Fonts** (in flight, Phase 1) |
| Properly size images / serve next-gen formats | TICKET-? — Image optimisation pass (open candidate; confirm or create after baseline) |
| Reduce unused JavaScript | TICKET-? — JS bundle audit (open candidate; confirm after baseline shows magnitude) |
| Use efficient cache policy on static assets | TICKET-? — CDN cache headers (open candidate) |
| Minimize main-thread work | Roll into the JS bundle audit ticket above |

The mapping above should be confirmed against the actual SEO audit backlog once the baseline data is in. If a predicted opportunity does not actually appear on the next run, the corresponding ticket can be deprioritised or closed.

## 6. Targets for next baseline (~04 June 2026)

Aspirational targets for the first re-baseline one month from today, regardless of where today's numbers land:

- **Mobile Performance score > 85** on all five priority URLs
- **LCP < 2.5 s** on all five priority URLs (Core Web Vitals "Good" threshold)
- **CLS < 0.1** on all five priority URLs (Core Web Vitals "Good" threshold)
- **INP < 200 ms** on all five priority URLs where INP is measurable (mobile-only; may still be absent for low-traffic pages without enough field data)

Stretch targets if the above are met:

- Desktop Performance score > 95 on the homepage and `/pricing`
- TBT < 200 ms on all mobile runs

## 7. Re-run instructions

The baseline is intended to be run monthly. Two options:

### Option A — anonymous (free, daily quota shared with the world)

```bash
URL="https://theenglishhub.app/"
curl -s "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${URL}&strategy=mobile&category=performance&category=accessibility&category=best-practices&category=seo" -o psi-home-mobile.json
```

Repeat for each of the 5 URLs and for `strategy=desktop` (10 calls total). Pace the calls — one every 5–10 seconds is plenty.

If you get HTTP 429 with `quota_limit_value: "0"` (today's failure mode), the anonymous project's daily quota is exhausted. Either wait until 08:00 UTC the next day for the reset, or switch to Option B.

### Option B — with a free API key (recommended)

1. Create a Google Cloud project (or reuse an existing one) at https://console.cloud.google.com.
2. Enable the **PageSpeed Insights API** under "APIs & Services > Library".
3. Create an API key under "APIs & Services > Credentials". Restrict it to the PageSpeed Insights API.
4. Save the key in your password manager as `PSI_API_KEY`.
5. Run:

```bash
KEY="<your PSI_API_KEY>"
URL="https://theenglishhub.app/"
curl -s "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${URL}&strategy=mobile&category=performance&category=accessibility&category=best-practices&category=seo&key=${KEY}" -o psi-home-mobile.json
```

The keyed quota is 25,000 queries per day, which is far more than this baseline will ever need.

### Convenience bash loop

```bash
KEY="<your PSI_API_KEY>"
URLS=(
  "https://theenglishhub.app/"
  "https://theenglishhub.app/pricing"
  "https://theenglishhub.app/for-students"
  "https://theenglishhub.app/igcse/edexcel"
  "https://theenglishhub.app/revision/poetry/power-and-conflict"
)
DATE=$(date -u +%Y-%m-%d)
mkdir -p "psi-${DATE}"
for STRATEGY in mobile desktop; do
  for URL in "${URLS[@]}"; do
    SLUG=$(echo "$URL" | sed -E 's|https://theenglishhub.app/?||; s|/|_|g; s|^$|home|')
    OUT="psi-${DATE}/${SLUG}-${STRATEGY}.json"
    echo "Fetching ${SLUG} (${STRATEGY})..."
    curl -s "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${URL}&strategy=${STRATEGY}&category=performance&category=accessibility&category=best-practices&category=seo&key=${KEY}" -o "$OUT"
    sleep 5
  done
done
```

### Fields to extract per JSON file

| Field | JSON path |
|---|---|
| Performance score | `categories.performance.score` (multiply by 100) |
| Accessibility score | `categories.accessibility.score` (multiply by 100) |
| Best Practices score | `categories['best-practices'].score` (multiply by 100) |
| SEO score | `categories.seo.score` (multiply by 100) |
| LCP | `audits['largest-contentful-paint'].displayValue` |
| CLS | `audits['cumulative-layout-shift'].displayValue` |
| TBT | `audits['total-blocking-time'].displayValue` |
| INP | `audits['interaction-to-next-paint'].displayValue` (mobile only; may be missing) |
| FCP | `audits['first-contentful-paint'].displayValue` |
| Opportunities | every audit object with `details.overallSavingsMs > 0` or `details.overallSavingsBytes > 0` — read `title`, `displayValue`, `numericValue`, `details.overallSavingsMs`, `details.overallSavingsBytes` |

`jq` one-liners to pull each value out of a saved file:

```bash
jq '.lighthouseResult.categories.performance.score * 100' psi-home-mobile.json
jq -r '.lighthouseResult.audits["largest-contentful-paint"].displayValue' psi-home-mobile.json
jq -r '.lighthouseResult.audits["cumulative-layout-shift"].displayValue' psi-home-mobile.json
jq -r '.lighthouseResult.audits["total-blocking-time"].displayValue' psi-home-mobile.json
jq -r '.lighthouseResult.audits["first-contentful-paint"].displayValue' psi-home-mobile.json
jq -r '.lighthouseResult.audits["interaction-to-next-paint"].displayValue // "n/a"' psi-home-mobile.json

# All opportunities with savings, ranked
jq -r '.lighthouseResult.audits | to_entries | map(select(.value.details.overallSavingsMs // 0 > 0 or .value.details.overallSavingsBytes // 0 > 0)) | sort_by(-(.value.details.overallSavingsMs // 0)) | .[] | "\(.key)\t\(.value.title)\t\(.value.displayValue)"' psi-home-mobile.json
```

## 8. Next action

Re-run this baseline tomorrow (05 May 2026) — either with an API key (preferred) or by retrying the anonymous endpoint after 08:00 UTC when the shared daily quota resets — and overwrite the empty tables in this file with real data. Once tables are populated, regenerate sections 4 and 5 from the actual top opportunities, and confirm or revise the predictions in section 5 against the SEO audit backlog tickets.

---

*Generated 04 May 2026. API endpoint: `https://www.googleapis.com/pagespeedonline/v5/runPagespeed`. Status: blocked on daily quota for shared anonymous project; no per-URL data captured.*
