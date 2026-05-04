/**
 * PostHog server-side smoke test.
 *
 * Bypasses the browser SDK + asset CDN entirely (which has been 503-ing
 * intermittently for newly-provisioned EU projects). Sends a single
 * `test_event` straight to https://eu.i.posthog.com/capture/ via fetch.
 *
 * If this succeeds, the project key + API endpoint are healthy and any
 * client-side 503s are CDN warmup that'll self-resolve.
 *
 * Usage:
 *   $env:NEXT_PUBLIC_POSTHOG_KEY = "phc_..."
 *   npx tsx scripts/posthog-test.ts
 *
 * Or with the host overridden (US region):
 *   $env:NEXT_PUBLIC_POSTHOG_KEY = "phc_..."
 *   $env:NEXT_PUBLIC_POSTHOG_HOST = "https://us.i.posthog.com"
 *   npx tsx scripts/posthog-test.ts
 *
 * Exit codes:
 *   0 — event accepted (PostHog returned 200, your project is healthy)
 *   1 — request failed (network, key, or PostHog returned non-200)
 *   2 — env var missing
 */

const KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY
const HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? 'https://eu.i.posthog.com'

async function main() {
  console.log('━'.repeat(60))
  console.log('PostHog server-side smoke test')
  console.log('━'.repeat(60))

  if (!KEY) {
    console.error('NEXT_PUBLIC_POSTHOG_KEY is not set.')
    console.error('')
    console.error('Set it before running, e.g.')
    console.error('  $env:NEXT_PUBLIC_POSTHOG_KEY = "phc_..."')
    console.error('  npx tsx scripts/posthog-test.ts')
    process.exit(2)
  }

  if (!KEY.startsWith('phc_')) {
    console.error(
      `NEXT_PUBLIC_POSTHOG_KEY does not start with "phc_" (got: "${KEY.slice(0, 8)}…").`,
    )
    console.error('That looks like a personal API key, not a project key.')
    console.error('Find the right key at posthog.com → Project Settings → Project API Key.')
    process.exit(2)
  }

  console.log(`API host: ${HOST}`)
  console.log(`Project key: ${KEY.slice(0, 12)}…${KEY.slice(-4)} (length ${KEY.length})`)
  console.log('')

  // PostHog's capture endpoint accepts batches AND single events. Single is
  // simpler. The endpoint is HTTP/JSON, no SDK or CDN involved.
  const captureUrl = `${HOST.replace(/\/$/, '')}/capture/`
  const body = {
    api_key: KEY,
    event: 'server_smoke_test',
    distinct_id: `server-test-${Date.now()}`,
    properties: {
      $lib: 'curl-equiv',
      source: 'scripts/posthog-test.ts',
      timestamp: new Date().toISOString(),
    },
    timestamp: new Date().toISOString(),
  }

  console.log(`POST ${captureUrl}`)
  console.log('Body:', JSON.stringify(body, null, 2))
  console.log('')

  let response: Response
  try {
    response = await fetch(captureUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    console.error('Fetch failed:', message)
    console.error('')
    console.error('That usually means: no internet, DNS failure, or PostHog')
    console.error('is genuinely down. Check https://status.posthog.com')
    process.exit(1)
  }

  const text = await response.text()
  console.log(`Response: ${response.status} ${response.statusText}`)
  console.log(`Body: ${text || '(empty)'}`)
  console.log('')

  if (response.status === 200 || response.status === 202) {
    console.log('✓ PostHog accepted the event.')
    console.log('')
    console.log('Next steps:')
    console.log('  1. Open posthog.com → Activity tab → filter to event = "server_smoke_test"')
    console.log('  2. You should see one row from the distinct_id printed above, within ~30s')
    console.log('  3. If it appears, your project is fully healthy.')
    console.log("  4. If client-side events still don't show up, the 503 is CDN warmup —")
    console.log('     wait 15-30 min and re-test the live site in incognito.')
    process.exit(0)
  }

  if (response.status === 401 || response.status === 403) {
    console.error('✗ PostHog rejected the key. Likely causes:')
    console.error('   - Wrong project key (you used a personal API key by mistake)')
    console.error('   - Key was revoked')
    console.error('   - Key belongs to a different region (EU vs US)')
    process.exit(1)
  }

  if (response.status === 503) {
    console.error('✗ PostHog returned 503 server-side too.')
    console.error('   This means the issue is project provisioning, not browser CDN.')
    console.error('   Wait 10-15 min and re-run, OR contact PostHog support.')
    process.exit(1)
  }

  console.error(`✗ Unexpected response: ${response.status} ${response.statusText}`)
  console.error('   Inspect the response body above for clues.')
  process.exit(1)
}

main().catch((err) => {
  console.error('Unexpected error:', err)
  process.exit(1)
})
