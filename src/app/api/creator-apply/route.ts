import { NextRequest, NextResponse } from 'next/server'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'

interface CreatorApplicationBody {
  name: string
  email: string
  platform: string
  handle?: string
  follower_count: string
  content_description: string
}

const VALID_PLATFORMS = ['tiktok', 'youtube', 'instagram', 'twitter', 'blog', 'other']
const VALID_FOLLOWER_COUNTS = ['<1K', '1K-5K', '5K-25K', '25K-100K', '100K+']

export async function POST(request: NextRequest) {
  try {
    // Rate limit: 5 applications per IP per hour
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`creator-apply:${ip}`, { limit: 5, windowSeconds: 3600 })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429, headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) } }
      )
    }

    let body: CreatorApplicationBody
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    }

    const { name, email, platform, handle, follower_count, content_description } = body

    // Validate required fields
    if (!name || !email || !platform || !follower_count || !content_description) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      )
    }

    if (name.length < 2 || name.length > 100) {
      return NextResponse.json(
        { error: 'Name must be between 2 and 100 characters.' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      )
    }

    if (!VALID_PLATFORMS.includes(platform)) {
      return NextResponse.json(
        { error: 'Please select a valid platform.' },
        { status: 400 }
      )
    }

    if (!VALID_FOLLOWER_COUNTS.includes(follower_count)) {
      return NextResponse.json(
        { error: 'Please select a valid follower count range.' },
        { status: 400 }
      )
    }

    if (content_description.length < 20 || content_description.length > 500) {
      return NextResponse.json(
        { error: 'Content description must be between 20 and 500 characters.' },
        { status: 400 }
      )
    }

    // Validate optional handle length
    if (handle && handle.length > 200) {
      return NextResponse.json(
        { error: 'Social handle / URL must be 200 characters or fewer.' },
        { status: 400 }
      )
    }

    // Store the application
    const supabase = createServiceRoleClient()

    // Check for duplicate application by email
    const { data: existing } = await supabase
      .from('creator_applications')
      .select('id')
      .eq('email', email.toLowerCase())
      .single()

    if (existing) {
      return NextResponse.json(
        { error: 'An application with this email already exists. We will be in touch soon.' },
        { status: 409 }
      )
    }

    const { error: insertError } = await supabase
      .from('creator_applications')
      .insert({
        name: name.trim(),
        email: email.toLowerCase().trim(),
        platform,
        handle: handle?.trim() || null,
        follower_count,
        content_description: content_description.trim(),
        status: 'pending',
        created_at: new Date().toISOString(),
      })

    if (insertError) {
      console.error('Failed to insert creator application:', insertError)
      return NextResponse.json(
        { error: 'Failed to submit application. Please try again.' },
        { status: 500 }
      )
    }

    // TODO(Phase-5): Send notification email to admin (ADMIN_EMAILS) via Resend when a new creator application is submitted

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Creator application error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
