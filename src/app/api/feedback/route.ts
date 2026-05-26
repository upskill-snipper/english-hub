import { NextRequest, NextResponse } from 'next/server'
import { verifyAdmin } from '@/lib/admin-auth'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'

/* ─── POST - submit feedback ─────────────────────────────────── */

export async function POST(request: NextRequest) {
  try {
    // Rate limit: 10 submissions per IP per hour
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`feedback:${ip}`, { limit: 10, windowSeconds: 3600 })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 },
      )
    }

    const body = await request.json()
    const { type, pageUrl, email } = body

    if (!type || !pageUrl) {
      return NextResponse.json({ error: 'Missing required fields: type, pageUrl' }, { status: 400 })
    }

    // Validate string fields
    if (typeof pageUrl !== 'string' || pageUrl.trim().length > 2000) {
      return NextResponse.json(
        { error: 'pageUrl must be a string of 2000 characters or fewer' },
        { status: 400 },
      )
    }

    if (email !== undefined && email !== null) {
      if (typeof email !== 'string' || email.length > 320) {
        return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
      }
    }

    if (type === 'suggestion') {
      if (!body.subject?.trim() || !body.message?.trim()) {
        return NextResponse.json(
          { error: 'Subject and message are required for suggestions' },
          { status: 400 },
        )
      }
      if (typeof body.subject !== 'string' || body.subject.trim().length > 200) {
        return NextResponse.json(
          { error: 'Subject must be 200 characters or fewer' },
          { status: 400 },
        )
      }
      if (typeof body.message !== 'string' || body.message.trim().length > 5000) {
        return NextResponse.json(
          { error: 'Message must be 5000 characters or fewer' },
          { status: 400 },
        )
      }
    } else if (type === 'issue') {
      if (!body.description?.trim()) {
        return NextResponse.json(
          { error: 'Description is required for issue reports' },
          { status: 400 },
        )
      }
      if (typeof body.description !== 'string' || body.description.trim().length > 5000) {
        return NextResponse.json(
          { error: 'Description must be 5000 characters or fewer' },
          { status: 400 },
        )
      }
    } else {
      return NextResponse.json(
        { error: 'Invalid type. Must be "suggestion" or "issue"' },
        { status: 400 },
      )
    }

    // Get optional user ID from session
    let userId: string | null = null
    try {
      const supabase = createServerSupabaseClient()
      const {
        data: { user },
      } = await supabase.auth.getUser()
      userId = user?.id ?? null
    } catch {
      // Anonymous feedback is allowed
    }

    const admin = createServiceRoleClient()
    const entry = {
      type,
      status: 'new',
      page_url: pageUrl.trim(),
      email: email?.trim() || null,
      user_id: userId,
      subject: type === 'suggestion' ? body.subject.trim() : null,
      message: type === 'suggestion' ? body.message.trim() : null,
      category: type === 'suggestion' ? body.category?.trim() || 'Other' : null,
      issue_type: type === 'issue' ? body.issueType?.trim() || 'Other' : null,
      description: type === 'issue' ? body.description.trim() : null,
      severity: type === 'issue' ? body.severity || 'Minor' : null,
    }

    const { data, error: insertError } = await admin
      .from('feedback_entries')
      .insert(entry)
      .select('id')
      .single()

    if (insertError) {
      console.error('[feedback] Insert error:', insertError)
      return NextResponse.json(
        { error: 'Failed to save feedback. Please try again.' },
        { status: 500 },
      )
    }

    return NextResponse.json({ success: true, id: data.id }, { status: 201 })
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }
}

/* ─── GET - admin list ────────────────────────────────────────── */

export async function GET(request: NextRequest) {
  const { user, error } = await verifyAdmin()
  if (error === 'Unauthorized' || !user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  if (error === 'Forbidden') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const { searchParams } = new URL(request.url)
  const type = searchParams.get('type')
  const status = searchParams.get('status')

  const admin = createServiceRoleClient()
  let query = admin
    .from('feedback_entries')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(100)

  if (type) query = query.eq('type', type)
  if (status) query = query.eq('status', status)

  const { data: results, error: fetchError } = await query

  if (fetchError) {
    console.error('[feedback] Fetch error:', fetchError)
    return NextResponse.json({ error: 'Failed to fetch feedback' }, { status: 500 })
  }

  return NextResponse.json({
    feedback: results ?? [],
    total: results?.length ?? 0,
  })
}

/* ─── PATCH - update status ──────────────────────────────────── */

export async function PATCH(request: NextRequest) {
  const { user, error: authErr } = await verifyAdmin()
  if (authErr === 'Unauthorized' || !user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  if (authErr === 'Forbidden') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  try {
    const body = await request.json()
    const { id, status } = body

    if (!id || !status) {
      return NextResponse.json({ error: 'Missing required fields: id, status' }, { status: 400 })
    }

    if (!['new', 'reviewed', 'resolved'].includes(status)) {
      return NextResponse.json({ error: 'Invalid status' }, { status: 400 })
    }

    const admin = createServiceRoleClient()
    const { data: entry, error: updateError } = await admin
      .from('feedback_entries')
      .update({ status })
      .eq('id', id)
      .select()
      .single()

    if (updateError || !entry) {
      return NextResponse.json({ error: 'Feedback entry not found' }, { status: 404 })
    }

    return NextResponse.json({ success: true, entry })
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }
}
