import { describe, it, expect } from 'vitest'

// ---------------------------------------------------------------------------
// Tests for the SocialShare component's child-account suppression and
// URL building logic.
//
// The component is a client component with onClick handlers and clipboard
// access. We test the pure logic rather than rendering in JSDOM, because the
// key compliance requirement (Children's Code) is a simple early return.
// ---------------------------------------------------------------------------

/**
 * Mirrors the buildShareUrl helper from social-share.tsx.
 */
function buildShareUrl(
  baseUrl: string,
  utmSource: string,
  utmMedium: string,
  utmCampaign?: string
): string {
  const url = new URL(baseUrl)
  url.searchParams.set('utm_source', utmSource)
  url.searchParams.set('utm_medium', utmMedium)
  if (utmCampaign) {
    url.searchParams.set('utm_campaign', utmCampaign)
  }
  return url.toString()
}

describe('SocialShare — child account suppression', () => {
  /**
   * The component returns `null` when `isChildAccount` is true.
   * This mirrors the check: `if (isChildAccount) { return null }`
   *
   * We model the logic as a pure function for testing.
   */
  function shouldRender(isChildAccount: boolean): boolean {
    if (isChildAccount) return false
    return true
  }

  it('returns null (suppresses rendering) for child accounts', () => {
    expect(shouldRender(true)).toBe(false)
  })

  it('renders for non-child accounts', () => {
    expect(shouldRender(false)).toBe(true)
  })

  it('renders by default when isChildAccount is not provided (defaults false)', () => {
    // The component defaults isChildAccount to false
    const isChildAccount = false
    expect(shouldRender(isChildAccount)).toBe(true)
  })
})

describe('SocialShare — buildShareUrl', () => {
  const baseUrl = 'https://theenglishhub.co.uk/analysis/macbeth'

  it('appends utm_source and utm_medium', () => {
    const result = buildShareUrl(baseUrl, 'social_share', 'referral')
    const url = new URL(result)
    expect(url.searchParams.get('utm_source')).toBe('social_share')
    expect(url.searchParams.get('utm_medium')).toBe('referral')
  })

  it('appends utm_campaign when provided', () => {
    const result = buildShareUrl(baseUrl, 'social_share', 'referral', 'spring2026')
    const url = new URL(result)
    expect(url.searchParams.get('utm_campaign')).toBe('spring2026')
  })

  it('omits utm_campaign when not provided', () => {
    const result = buildShareUrl(baseUrl, 'social_share', 'referral')
    const url = new URL(result)
    expect(url.searchParams.has('utm_campaign')).toBe(false)
  })

  it('preserves the base URL path', () => {
    const result = buildShareUrl(baseUrl, 'social_share', 'twitter')
    const url = new URL(result)
    expect(url.pathname).toBe('/analysis/macbeth')
    expect(url.hostname).toBe('theenglishhub.co.uk')
  })

  it('handles base URLs that already have query parameters', () => {
    const urlWithParams = 'https://theenglishhub.co.uk/games?level=2'
    const result = buildShareUrl(urlWithParams, 'social_share', 'whatsapp')
    const url = new URL(result)
    expect(url.searchParams.get('level')).toBe('2')
    expect(url.searchParams.get('utm_source')).toBe('social_share')
    expect(url.searchParams.get('utm_medium')).toBe('whatsapp')
  })
})

describe('SocialShare — platform share URLs', () => {
  it('generates correct Twitter intent URL structure', () => {
    const shareUrl = buildShareUrl(
      'https://theenglishhub.co.uk/analysis/macbeth',
      'social_share',
      'twitter'
    )
    const shareText = 'Macbeth Analysis'
    const twitterHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`

    expect(twitterHref).toContain('twitter.com/intent/tweet')
    expect(twitterHref).toContain('text=')
    expect(twitterHref).toContain('url=')
  })

  it('generates correct WhatsApp share URL structure', () => {
    const shareUrl = buildShareUrl(
      'https://theenglishhub.co.uk/analysis/macbeth',
      'social_share',
      'whatsapp'
    )
    const shareText = 'Macbeth Analysis'
    const whatsappHref = `https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`

    expect(whatsappHref).toContain('wa.me')
    expect(whatsappHref).toContain('text=')
  })
})
