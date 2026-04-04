/**
 * Lightweight UTM parameter tracking utility.
 *
 * - Captures utm_source, utm_medium, utm_campaign, utm_term, utm_content from the URL
 * - Persists to localStorage with a timestamp
 * - Expires after 30 days (first-touch attribution)
 * - Provides getUtmParams() to retrieve stored values
 */

const UTM_STORAGE_KEY = 'utm_params'
const UTM_EXPIRY_DAYS = 30

export interface UtmParams {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
}

interface StoredUtm {
  params: UtmParams
  timestamp: number
}

const UTM_KEYS: (keyof UtmParams)[] = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
]

/**
 * Extract UTM parameters from a URL search string.
 * Returns null if no UTM params are present.
 */
function parseUtmFromSearch(search: string): UtmParams | null {
  const url = new URLSearchParams(search)
  const params: UtmParams = {}
  let found = false

  for (const key of UTM_KEYS) {
    const value = url.get(key)
    if (value) {
      params[key] = value
      found = true
    }
  }

  return found ? params : null
}

/**
 * Capture UTM parameters from the current URL and store in localStorage.
 * Only overwrites existing values if new UTM params are present in the URL
 * (last-touch attribution for new campaigns, preserves first-touch otherwise).
 */
export function captureUtmParams(): void {
  if (typeof window === 'undefined') return

  const params = parseUtmFromSearch(window.location.search)
  if (!params) return

  const stored: StoredUtm = {
    params,
    timestamp: Date.now(),
  }

  try {
    localStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(stored))
  } catch {
    // localStorage unavailable (private browsing, quota exceeded, etc.)
  }
}

/**
 * Retrieve stored UTM parameters.
 * Returns null if no params are stored or if they have expired (>30 days).
 */
export function getUtmParams(): UtmParams | null {
  if (typeof window === 'undefined') return null

  try {
    const raw = localStorage.getItem(UTM_STORAGE_KEY)
    if (!raw) return null

    const stored: StoredUtm = JSON.parse(raw)
    const ageMs = Date.now() - stored.timestamp
    const expiryMs = UTM_EXPIRY_DAYS * 24 * 60 * 60 * 1000

    if (ageMs > expiryMs) {
      localStorage.removeItem(UTM_STORAGE_KEY)
      return null
    }

    return stored.params
  } catch {
    return null
  }
}

/**
 * Clear stored UTM parameters (useful after successful attribution).
 */
export function clearUtmParams(): void {
  if (typeof window === 'undefined') return

  try {
    localStorage.removeItem(UTM_STORAGE_KEY)
  } catch {
    // Silently ignore
  }
}
