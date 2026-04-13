'use client'

import { useState } from 'react'
import { Share2, Link2, Check, MessageCircle } from 'lucide-react'

interface SocialShareProps {
  /** The URL to share. Defaults to current page URL. */
  url?: string
  /** The share text / title. */
  title: string
  /** Optional description for platforms that support it. */
  description?: string
  /** UTM source to append. Defaults to 'social_share'. */
  utmSource?: string
  /** UTM medium to append. Defaults to 'referral'. */
  utmMedium?: string
  /** UTM campaign to append. */
  utmCampaign?: string
  /** Size variant */
  variant?: 'default' | 'compact'
  /** Additional className */
  className?: string
  /**
   * Children's Code Standard 3 — Age-appropriate application.
   * When true, the social-share nudge is suppressed entirely.
   * Pass true for users under 16 / child accounts (isMinor).
   * Social sharing encourages data disclosure and is not appropriate
   * for child users per ICO guidance.
   */
  isChildAccount?: boolean
}

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

export function SocialShare({
  url,
  title,
  description,
  utmSource = 'social_share',
  utmMedium = 'referral',
  utmCampaign,
  variant = 'default',
  className = '',
  isChildAccount = false,
}: SocialShareProps) {
  const [copied, setCopied] = useState(false)

  // Children's Code: suppress social-share nudge for child accounts (under 16).
  // Social sharing encourages children to disclose personal data and activity,
  // which is not appropriate per ICO Age Appropriate Design Code guidance.
  if (isChildAccount) {
    return null
  }

  const baseUrl = url || (typeof window !== 'undefined' ? window.location.href : '')

  const twitterUrl = buildShareUrl(baseUrl, utmSource, 'twitter', utmCampaign)
  const whatsappUrl = buildShareUrl(baseUrl, utmSource, 'whatsapp', utmCampaign)
  const tiktokUrl = buildShareUrl(baseUrl, utmSource, 'tiktok', utmCampaign)
  const copyUrl = buildShareUrl(baseUrl, utmSource, utmMedium, utmCampaign)

  const shareText = description ? `${title} — ${description}` : title

  const twitterHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(twitterUrl)}`
  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(`${shareText} ${whatsappUrl}`)}`

  async function handleCopyLink() {
    try {
      await navigator.clipboard.writeText(copyUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for older browsers
      const input = document.createElement('input')
      input.value = copyUrl
      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      document.body.removeChild(input)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  function handleTikTokShare() {
    // TikTok doesn't have a direct share URL API
    // Copy the link so they can paste it in their TikTok bio or video description
    navigator.clipboard.writeText(tiktokUrl).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-1.5 ${className}`}>
        <button
          onClick={handleCopyLink}
          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-brand-muted hover:text-brand-text hover:bg-brand-card transition-colors"
          title="Copy link"
        >
          {copied ? (
            <Check className="w-3.5 h-3.5 text-green-400" />
          ) : (
            <Link2 className="w-3.5 h-3.5" />
          )}
          {copied ? 'Copied!' : 'Share'}
        </button>
      </div>
    )
  }

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      <span className="text-xs text-brand-muted font-medium flex items-center gap-1.5">
        <Share2 className="w-3.5 h-3.5" />
        Share:
      </span>

      {/* Twitter / X */}
      <a
        href={twitterHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-brand-card hover:bg-brand-card/80 text-brand-muted hover:text-brand-text border border-brand-border transition-colors"
        title="Share on Twitter / X"
      >
        <XIcon className="w-3.5 h-3.5" />
        Twitter
      </a>

      {/* WhatsApp */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-brand-card hover:bg-brand-card/80 text-brand-muted hover:text-brand-text border border-brand-border transition-colors"
        title="Share on WhatsApp"
      >
        <MessageCircle className="w-3.5 h-3.5" />
        WhatsApp
      </a>

      {/* TikTok (copy link) */}
      <button
        onClick={handleTikTokShare}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-brand-card hover:bg-brand-card/80 text-brand-muted hover:text-brand-text border border-brand-border transition-colors"
        title="Copy link for TikTok"
      >
        <TikTokIcon className="w-3.5 h-3.5" />
        TikTok
      </button>

      {/* Copy Link */}
      <button
        onClick={handleCopyLink}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-brand-card hover:bg-brand-card/80 text-brand-muted hover:text-brand-text border border-brand-border transition-colors"
        title="Copy link"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-green-400" />
            Copied!
          </>
        ) : (
          <>
            <Link2 className="w-3.5 h-3.5" />
            Copy Link
          </>
        )}
      </button>
    </div>
  )
}

/* ── Inline SVG icons for platforms not in lucide ────────── */

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.19 8.19 0 0 0 4.76 1.52V6.82a4.84 4.84 0 0 1-1-.13z" />
    </svg>
  )
}
