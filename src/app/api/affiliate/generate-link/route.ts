/**
 * POST /api/affiliate/generate-link
 *
 * Creates a trackable affiliate link for the authenticated affiliate.
 * Requires the caller to be logged in AND to have an active affiliate_accounts
 * row. Optionally accepts a `target_path` (e.g. "/pricing") and campaign
 * metadata to tag the link for reporting.
 *
 * Response:
 *   { link_id, code, url, short_url }
 */

import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'

interface GenerateLinkBody {
  target_path?: string
  campaign?: string
  medium?: string
  label?: string
}

const SAFE_PATH = /^\/[A-Za-z0-9/_\-?=&#.]{0,200}$/
const TAG_REGEX = /^[A-Za-z0-9_-]{1,40}$/

function getSiteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.NEXT_PUBLIC_APP_URL ||
    'https://theenglishhub.co.uk'
  ).replace(/\/+$/, '')
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`affiliate-genlink:${ip}`, {
      limit: 30,
      windowSeconds: 3600,
    })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many link generations. Please slow down.' },
        { status: 429 },
      )
    }

    const supabase = createServerSupabaseClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
    }

    let body: GenerateLinkBody = {}
    try {
      const text = await request.text()
      if (text) body = JSON.parse(text) as GenerateLinkBody
    } catch {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    }

    // Validate optional fields
    if (body.target_path && !SAFE_PATH.test(body.target_path)) {
      return NextResponse.json({ error: 'Invalid target_path' }, { status: 400 })
    }
    for (const key of ['campaign', 'medium', 'label'] as const) {
      const value = body[key]
      if (value && !TAG_REGEX.test(value)) {
        return NextResponse.json(
          { error: `Invalid ${key}: must be 1-40 chars (letters, digits, _ or -)` },
          { status: 400 },
        )
      }
    }

    const admin = createServiceRoleClient()

    // Look up the affiliate account for this user
    const { data: account, error: accountError } = await admin
      .from('affiliate_accounts')
      .select('id, code, status')
      .eq('user_id', user.id)
      .maybeSingle()

    if (accountError) {
      console.error('[affiliate/generate-link] account lookup failed:', accountError)
      return NextResponse.json({ error: 'Failed to load affiliate account' }, { status: 500 })
    }

    if (!account) {
      return NextResponse.json(
        { error: 'No affiliate account found for this user' },
        { status: 404 },
      )
    }

    if (account.status !== 'active') {
      return NextResponse.json(
        {
          error: 'Affiliate account is not active yet. Link generation is enabled after approval.',
        },
        { status: 403 },
      )
    }

    // Insert a new link row
    const { data: link, error: insertError } = await admin
      .from('affiliate_links')
      .insert({
        affiliate_id: account.id,
        target_path: body.target_path ?? '/',
        campaign: body.campaign ?? null,
        medium: body.medium ?? null,
        label: body.label ?? null,
      })
      .select('id, token')
      .single()

    if (insertError || !link) {
      console.error('[affiliate/generate-link] insert failed:', insertError)
      return NextResponse.json({ error: 'Failed to generate link' }, { status: 500 })
    }

    const site = getSiteUrl()
    const target = body.target_path ?? '/'
    const joinChar = target.includes('?') ? '&' : '?'
    const url = `${site}${target}${joinChar}ref=${encodeURIComponent(
      account.code,
    )}&aff_link=${encodeURIComponent(link.token ?? link.id)}`

    // Short URL pattern - the DB token is expected to be short (see migration)
    const shortUrl = `${site}/r/${encodeURIComponent(link.token ?? link.id)}`

    return NextResponse.json(
      {
        success: true,
        link_id: link.id,
        code: account.code,
        url,
        short_url: shortUrl,
      },
      { status: 201 },
    )
  } catch (err) {
    console.error('[affiliate/generate-link] unexpected error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
