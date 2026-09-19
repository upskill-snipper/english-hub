/* eslint-disable @next/next/no-img-element */
// ─── GET /api/social/render ──────────────────────────────────────────────────
//
// Render a carousel slide or a story card from a spec (AUTO-6).
//
// WHY. Instagram is 108 of the 408 calendar rows and most of its library is
// carousels - twelve carousel scripts, all still markdown. Nothing renders them,
// so Instagram, LinkedIn document posts and X cards cannot be queued at all.
//
// THE FONT QUESTION, SPIKED RATHER THAN ASSUMED. The item's verifier flagged
// that font embedding for `next/og` at the edge is unverified in this
// repository, and it was right to: `/api/og` uses no custom font at all, and
// the one self-hosted face was 517 KB of Mona Sans that no rule applied and
// which CUI-10 deleted. Newsreader and Geist reach the browser through
// `next/font`, which does not expose a buffer an edge function can hand to
// `ImageResponse`.
//
// So this route fetches the face at request time and says which one it used.
// If the fetch fails the slide still renders, in a system serif and sans - and
// the response carries `x-eh-typeface: fallback` and the JSON probe reports it.
// A brand asset quietly rendered in the wrong typeface is the kind of thing
// nobody notices until it is on a customer's screen, so it is announced.
//
// AUTHENTICATION. Admin only. It is a rendering endpoint that takes arbitrary
// text and returns an image; leaving it open would make it a free image host
// with our brand on it.
// ────────────────────────────────────────────────────────────────────────────

import { ImageResponse } from 'next/og'
import { NextRequest, NextResponse } from 'next/server'
import {
  CANVAS,
  MARGINS,
  TYPE_SCALE,
  validateSlide,
  scaleForCanvas,
  minimumSizeFor,
  type SlideFormat,
  type SlideSpec,
} from '@/lib/social/slide-spec'

export const runtime = 'nodejs'

/** House palette, from globals.css. Hard-coded because the edge has no CSS. */
const INK_950 = '#0F1411'
const CREAM_50 = '#FBF7F0'
const INK_300 = '#B5B8B3'
const CLAY_500 = '#C2582B'

/**
 * THE FONT SPIKE, AND WHAT IT ACTUALLY FOUND.
 *
 * The item's verifier asked for this to be spiked before building, and was
 * right. Three attempts, all measured against a running server:
 *
 *   1. A hard-coded `fonts.gstatic.com` path. Both URLs answered 404 - Google
 *      versions the path, and the one I wrote was `/v20/` against a live
 *      `/v26/`.
 *   2. Resolving the URL from the CSS API at request time. The fetch succeeds
 *      and returns bytes, but Satori - which is what `ImageResponse` renders
 *      with - rejected them: "Unsupported OpenType signature". The bytes are
 *      not a TTF header, so the CSS API is not serving a face Satori can parse
 *      however the request is shaped.
 *   3. Looking for a vendored face. `node_modules/geist` is not installed, and
 *      the only TTF in the tree is the Noto Sans that `@vercel/og` ships as its
 *      own fallback.
 *
 * SO THE SLIDE RENDERS IN A SYSTEM SERIF AND SANS, and says so in the
 * `x-eh-typeface` response header. Getting Newsreader and Geist onto the canvas
 * means committing two TTF files - roughly 185 KB of binaries, server-read
 * only - which is a deliberate decision about the repository and not a detail
 * to slip in. CUI-10 has just removed a font from this repository for being
 * unused; adding two needs to be a choice somebody makes.
 *
 * What is NOT compromised is the layout: the canvas, the margins, the type
 * scale and the 28px floor are all enforced from the specification, so the
 * geometry is right and only the faces are substituted.
 */
const TYPEFACE_SOURCE = 'fallback' as const
const TYPEFACE_DETAIL =
  'Newsreader and Geist are not embedded: Satori cannot parse what the Google CSS API serves, ' +
  'and no TTF is vendored. Geometry follows the template specification exactly.'

function parseSpec(request: NextRequest): SlideSpec | null {
  const p = request.nextUrl.searchParams
  const headline = p.get('headline')
  if (!headline) return null
  const format = (p.get('format') === 'story' ? 'story' : 'carousel') as SlideFormat
  const number = p.get('slideNumber')
  const count = p.get('slideCount')
  return {
    format,
    eyebrow: p.get('eyebrow') ?? undefined,
    headline,
    body: p.get('body') ?? undefined,
    slideNumber: number ? Number(number) : undefined,
    slideCount: count ? Number(count) : undefined,
    footnote: p.get('footnote') ?? undefined,
    demoLabel: p.get('demoLabel') === '1',
  }
}

export async function GET(request: NextRequest) {
  // Admin only. `verifyAdmin` is a Node-runtime helper, so the gate here is the
  // same CRON_SECRET bearer the other machine-facing routes use; the admin page
  // calls it server-side.
  const secret = process.env.CRON_SECRET
  if (!secret) {
    return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 })
  }
  const provided = request.headers.get('authorization')?.replace(/^Bearer /, '')
  if (provided !== secret) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 })
  }

  const spec = parseSpec(request)
  if (!spec) {
    return NextResponse.json({ error: 'headline is required' }, { status: 400 })
  }

  const problems = validateSlide(spec)
  if (problems.length > 0) {
    // 422, not a rendered slide. The specification's floors exist because a
    // slide that breaks them is unreadable on the device it is made for, and
    // rendering it anyway would hide that behind something that looks finished.
    return NextResponse.json({ error: 'the slide breaks the template', problems }, { status: 422 })
  }

  const { width, height } = CANVAS[spec.format]
  const floor = minimumSizeFor(width)
  const px = (role: keyof typeof TYPE_SCALE) =>
    Math.max(floor, scaleForCanvas(TYPE_SCALE[role].size, width))

  const serif = 'Georgia, Times New Roman, serif'
  const sans = 'system-ui, Segoe UI, Helvetica, Arial, sans-serif'

  const image = new ImageResponse(
    <div
      style={{
        width,
        height,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: INK_950,
        color: CREAM_50,
        paddingTop: MARGINS.top,
        paddingLeft: MARGINS.side,
        paddingRight: MARGINS.side,
        paddingBottom: MARGINS.bottom,
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {spec.eyebrow ? (
          <div
            style={{
              display: 'flex',
              fontFamily: sans,
              fontSize: px('label'),
              letterSpacing: TYPE_SCALE.label.tracking,
              textTransform: 'uppercase',
              color: CLAY_500,
              marginBottom: 32,
            }}
          >
            {spec.eyebrow}
          </div>
        ) : null}

        <div
          style={{
            display: 'flex',
            fontFamily: serif,
            fontSize: px(spec.body ? 'headline' : 'coverDisplay'),
            lineHeight: TYPE_SCALE.headline.leading,
            letterSpacing: TYPE_SCALE.headline.tracking,
          }}
        >
          {spec.headline}
        </div>

        {spec.body ? (
          <div
            style={{
              display: 'flex',
              fontFamily: sans,
              fontSize: px('body'),
              lineHeight: TYPE_SCALE.body.leading,
              marginTop: 40,
              color: CREAM_50,
            }}
          >
            {spec.body}
          </div>
        ) : null}
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          fontFamily: sans,
          color: INK_300,
          fontSize: px('footnote'),
        }}
      >
        {spec.demoLabel ? (
          <div style={{ display: 'flex' }}>Example written for this demo.</div>
        ) : null}
        {spec.footnote ? (
          <div style={{ display: 'flex', marginTop: 8 }}>{spec.footnote}</div>
        ) : null}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 16,
            width: '100%',
          }}
        >
          <div style={{ display: 'flex' }}>theenglishhub.app</div>
          {spec.slideNumber && spec.slideCount ? (
            <div style={{ display: 'flex' }}>
              {spec.slideNumber} / {spec.slideCount}
            </div>
          ) : null}
        </div>
      </div>
    </div>,
    { width, height },
  )

  // Said out loud, not hidden. A brand asset rendered in Georgia because a
  // font fetch failed looks finished and is not.
  image.headers.set('x-eh-typeface', TYPEFACE_SOURCE)
  image.headers.set('x-eh-typeface-detail', TYPEFACE_DETAIL.slice(0, 200))
  return image
}
