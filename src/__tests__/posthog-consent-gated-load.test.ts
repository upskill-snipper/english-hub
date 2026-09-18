import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'

/**
 * PostHog must not load - at all - before a visitor consents.
 *
 * THE DEFECT (19 September 2026, PERF-7 phase B). `src/lib/posthog.ts` imported
 * `posthog-js` at module scope and `PostHogProvider` called `initPostHog()` from
 * a mount effect in the root layout. So ~185 KB of SDK was downloaded, parsed
 * and initialised for every visitor on first paint, whether or not they ever
 * accepted analytics cookies.
 *
 * `opt_out_capturing_by_default: true` meant no EVENTS were sent pre-consent,
 * which is what made this look acceptable. But `persistence:
 * 'localStorage+cookie'` means `init()` itself writes a `distinct_id` cookie the
 * moment it runs - a non-essential identifying cookie set before consent, which
 * is a PECR reg. 6 problem independently of what is done with it afterwards.
 *
 * WHY THE ENV STUB BELOW IS LOAD-BEARING. `NEXT_PUBLIC_POSTHOG_KEY` is not set
 * in the test environment, so `initPostHog()` returns early at the key check
 * before reaching `init()` - which means a naive "init was not called" assertion
 * PASSES against the old, broken code and proves nothing at all, and the
 * matching "init was called after consent" assertion fails even against a
 * correct implementation. Stubbing the key is what gives these tests the
 * ability to fail. It works because the key is read inside the function rather
 * than at module scope.
 */

const initMock = vi.fn()
const captureMock = vi.fn()
const optInMock = vi.fn()
const optOutMock = vi.fn()

vi.mock('posthog-js', () => {
  const client = {
    init: initMock,
    capture: captureMock,
    identify: vi.fn(),
    reset: vi.fn(),
    opt_in_capturing: optInMock,
    opt_out_capturing: optOutMock,
  }
  return { default: client }
})

function setConsent(value: string | null) {
  if (value === null) window.localStorage.removeItem('cookie-consent')
  else window.localStorage.setItem('cookie-consent', value)
}

function setAge(value: string | null) {
  if (value === null) window.localStorage.removeItem('eh-is-minor')
  else window.localStorage.setItem('eh-is-minor', value)
}

/** Fresh module registry per test so the module-scope `ph` handle resets. */
async function freshModule() {
  vi.resetModules()
  return import('@/lib/posthog')
}

beforeEach(() => {
  vi.stubEnv('NEXT_PUBLIC_POSTHOG_KEY', 'phc_test_key')
  window.localStorage.clear()
  initMock.mockClear()
  captureMock.mockClear()
  optInMock.mockClear()
  optOutMock.mockClear()
})

afterEach(() => {
  vi.unstubAllEnvs()
})

// ─── The env stub itself, asserted so it cannot rot ─────────────────────────

describe('the test environment', () => {
  it('has a PostHog key, or every assertion below is vacuous', () => {
    // Without this the module returns at the key check and "init not called"
    // would pass against any implementation, correct or not.
    expect(process.env.NEXT_PUBLIC_POSTHOG_KEY).toBeTruthy()
  })
})

// ─── Nothing loads without consent ──────────────────────────────────────────

describe('before consent', () => {
  it('does not initialise for a visitor who has decided nothing', async () => {
    const { initPostHog } = await freshModule()
    await initPostHog()
    expect(initMock).not.toHaveBeenCalled()
  })

  it('does not initialise for a visitor who declined', async () => {
    setConsent('essential')
    const { initPostHog } = await freshModule()
    await initPostHog()
    expect(initMock).not.toHaveBeenCalled()
  })

  it('does not initialise just because an event was captured', async () => {
    const { capture } = await freshModule()
    capture('pricing_viewed')
    await Promise.resolve()
    expect(initMock).not.toHaveBeenCalled()
    expect(captureMock).not.toHaveBeenCalled()
  })
})

// ─── It loads on consent, exactly once ──────────────────────────────────────

describe('on consent', () => {
  it('initialises once the visitor has accepted', async () => {
    setConsent('all')
    setAge('adult')
    const { initPostHog } = await freshModule()
    await initPostHog()
    expect(initMock).toHaveBeenCalledTimes(1)
  })

  it('loads when consent arrives later, via refreshOptInState', async () => {
    // This is the path that matters in the product: PostHogProvider mounts
    // before the banner is answered, so the mount call no-ops and the
    // Accept-all click is what has to trigger the load.
    const { initPostHog, refreshOptInState } = await freshModule()
    await initPostHog()
    expect(initMock).not.toHaveBeenCalled()

    setConsent('all')
    setAge('adult')
    refreshOptInState()
    await vi.waitFor(() => expect(initMock).toHaveBeenCalledTimes(1))
  })

  it('does not initialise twice when called concurrently', async () => {
    setConsent('all')
    setAge('adult')
    const { initPostHog } = await freshModule()
    await Promise.all([initPostHog(), initPostHog(), initPostHog()])
    expect(initMock).toHaveBeenCalledTimes(1)
  })
})

// ─── The queue, which is the part most likely to be dropped as "extra" ──────

describe('events fired in the same tick as consent', () => {
  it('are delivered rather than silently dropped', async () => {
    setConsent('all')
    setAge('adult')
    const { capture } = await freshModule()

    // No await: this is the real sequence - the funnel event fires immediately
    // after the Accept-all click, while the chunk is still in flight.
    capture('pricing_viewed', { plan: 'monthly' })
    expect(captureMock).not.toHaveBeenCalled()

    await vi.waitFor(() => expect(captureMock).toHaveBeenCalledTimes(1))
    expect(captureMock).toHaveBeenCalledWith('pricing_viewed', { plan: 'monthly' })
  })

  it('does not grow without bound for a visitor who never consents', async () => {
    const { capture } = await freshModule()
    for (let i = 0; i < 100; i++) capture(`event_${i}`)
    setConsent('all')
    setAge('adult')
    const { initPostHog } = await import('@/lib/posthog')
    await initPostHog()
    // Nothing was queued at all, because consent failed at capture time.
    expect(captureMock).not.toHaveBeenCalled()
  })
})

// ─── Children: the path with no second chance ───────────────────────────────

describe('a minor', () => {
  it('does not load PostHog even with full cookie consent', async () => {
    setConsent('all')
    setAge('true')
    const { initPostHog } = await freshModule()
    await initPostHog()
    expect(initMock).not.toHaveBeenCalled()
  })

  it('does not load when the age is merely unknown', async () => {
    // An unverified age is not an adult age.
    setConsent('all')
    setAge('unknown')
    const { initPostHog } = await freshModule()
    await initPostHog()
    expect(initMock).not.toHaveBeenCalled()
  })

  it('has queued events dropped if the minor flag lands WHILE the SDK loads', async () => {
    // The one window this deferred load could ship a child's event.
    // `setAgeAssurance()` is called from session boot, so the flag can arrive
    // in the ~200ms between an event being queued and the chunk resolving.
    // Consent must therefore be re-checked per event AT FLUSH TIME, not only
    // when the event was queued. With the old synchronous init this race did
    // not exist, so deferring the load created it and must also close it.
    setConsent('all')
    setAge('adult')
    const { capture } = await freshModule()

    capture('first_essay_submitted')
    expect(captureMock).not.toHaveBeenCalled()

    // The account turns out to belong to a child, mid-flight.
    setAge('true')

    await new Promise((resolve) => setTimeout(resolve, 20))
    expect(captureMock).not.toHaveBeenCalled()
  })
})
