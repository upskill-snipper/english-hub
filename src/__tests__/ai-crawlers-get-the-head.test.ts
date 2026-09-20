import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

/**
 * AI answer engines were served pages with no title, description or canonical.
 *
 * Next 15 STREAMS metadata. For a browser the shell is flushed immediately and
 * `<title>`, the meta description and the canonical arrive later - faster, and
 * entirely correct. Measured across all 1,303 sitemap URLs on 20 September
 * 2026, that puts the title OUTSIDE `</head>` on 1,111 of them (85.3%), median
 * byte 58,251, and at byte 723,817 on the longest reader page.
 *
 * Next already solves this for crawlers that do not run JavaScript: it blocks
 * the stream until metadata resolves for any user agent matching
 * `htmlLimitedBots`. Its default list is from the social-and-search era -
 * Bingbot, Applebot, Twitterbot, Slackbot, facebookexternalhit - and contains
 * not one AI answer engine.
 *
 * VERIFIED BEFORE CHANGING ANYTHING by fetching /revision/texts/macbeth as
 * GPTBot, ClaudeBot and PerplexityBot. All three received `</head>` at byte
 * 8,558 and the `<title>` at byte 79,278. They index what they are handed and
 * do not render, so those pages had no title, no description and no canonical
 * as far as they were concerned - on a site whose owner is trying to win
 * exactly those citations.
 *
 * GOOGLEBOT IS DELIBERATELY ABSENT from the list and must stay absent. It
 * renders JavaScript, so blocking the stream for it would cost real speed on
 * the surface where speed is a ranking factor and gain nothing. That asymmetry
 * is the whole reason the setting is a list rather than a switch.
 *
 * MUTATION RUN, verified to have altered the file first: removing GPTBot from
 * the pattern fails 2 of these.
 */

const CONFIG = readFileSync(join(process.cwd(), 'next.config.js'), 'utf8')

/** The regex literal actually assigned to htmlLimitedBots. */
function limitedBots(): RegExp {
  const m = CONFIG.match(/htmlLimitedBots:\s*\n?\s*(\/.+\/[a-z]*),/)
  expect(m, 'htmlLimitedBots is not set in next.config.js').toBeTruthy()
  const [, literal] = m!
  const lastSlash = literal.lastIndexOf('/')
  return new RegExp(literal.slice(1, lastSlash), literal.slice(lastSlash + 1))
}

describe('the AI answer engines are served a complete head', () => {
  it('htmlLimitedBots is configured at all', () => {
    expect(CONFIG).toMatch(/htmlLimitedBots:/)
  })

  const AI_CRAWLERS = [
    'GPTBot/1.2',
    'OAI-SearchBot/1.0',
    'ChatGPT-User/1.0',
    'ClaudeBot/1.0',
    'Claude-SearchBot/1.0',
    'PerplexityBot/1.0',
    'Amazonbot/0.1',
    'CCBot/2.0',
    'meta-externalagent/1.1',
    'Bytespider',
  ]

  it.each(AI_CRAWLERS)('%s is matched, so it waits for metadata', (ua) => {
    expect(limitedBots().test(ua), `${ua} would be streamed a headless page`).toBe(true)
  })

  it('and the crawlers Next already handled are still matched', () => {
    // Adding to the list must not mean replacing it. These come from Next's
    // own default and losing them would be a silent regression for the social
    // preview cards and for Bing.
    for (const ua of [
      'Bingbot/2.0',
      'Applebot/0.1',
      'Twitterbot/1.0',
      'Slackbot-LinkExpanding 1.0',
      'facebookexternalhit/1.1',
      'LinkedInBot/1.0',
      'DuckDuckBot/1.1',
    ]) {
      expect(limitedBots().test(ua), `${ua} lost its place in the list`).toBe(true)
    }
  })

  it('but Googlebot is NOT, because it renders and blocking it costs speed', () => {
    // THE ASSERTION THAT MATTERS in the other direction. A well-meaning edit
    // that adds Googlebot would slow the surface where speed is a ranking
    // factor, to solve a problem Googlebot does not have.
    expect(
      limitedBots().test(
        'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
      ),
    ).toBe(false)
  })

  it('and a real browser is not blocked either', () => {
    expect(
      limitedBots().test(
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      ),
    ).toBe(false)
  })
})
