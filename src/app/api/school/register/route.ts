import { NextRequest, NextResponse } from 'next/server'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { verifyAdmin } from '@/lib/admin-auth'

export const dynamic = 'force-dynamic'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface RegisterBody {
  schoolName?: string
  schoolType?: string
  examBoard?: string
  curriculum?: string[]
  address?: string
  city?: string
  postcode?: string
  country?: string
  adminFirstName?: string
  adminLastName?: string
  jobTitle?: string
  email?: string
  phone?: string
  password?: string
  promoCode?: string
}

interface PromoResult {
  accessType: 'founder' | 'standard'
  accessUntil: string | null
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

async function resolvePromoCode(
  code: string,
  admin: ReturnType<typeof createServiceRoleClient>,
): Promise<PromoResult | { error: string }> {
  if (code.toUpperCase() === 'FOUNDER') {
    return {
      accessType: 'founder',
      accessUntil: '2026-08-31',
    }
  }

  // Check promo_codes table.
  // P1 (Cycle 2 data model): the committed schema
  // (supabase/migrations/20260404_school_promo_and_access.sql) uses
  // `discount_type` + `discount_value` + `free_until_date`, not
  // `discount_percent` + `access_until`. Earlier reads here failed
  // silently (Supabase returns undefined for non-existent columns on
  // some versions), and `access_until` was always null. Corrected.
  const { data: promo, error } = await admin
    .from('promo_codes')
    .select('id, discount_type, discount_value, free_until_date, is_active, max_uses, uses')
    .eq('code', code.toUpperCase())
    .single()

  if (error || !promo) {
    return { error: 'Invalid promo code.' }
  }

  if (!promo.is_active) {
    return { error: 'This promo code is no longer active.' }
  }

  if (promo.max_uses !== null && promo.uses >= promo.max_uses) {
    return { error: 'This promo code has reached its usage limit.' }
  }

  return {
    accessType: 'standard',
    accessUntil: promo.free_until_date ?? null,
  }
}

// ---------------------------------------------------------------------------
// POST /api/school/register
// ---------------------------------------------------------------------------

export async function POST(request: NextRequest): Promise<NextResponse> {
  // ── Site-admin gate ─────────────────────────────────────────────────────
  // DEFECT (2026-08-23): this endpoint was public, protected only by an IP
  // rate limit. It creates a `schools` tenant row AND an email-confirmed
  // Supabase auth user carrying role: 'school_admin', so any anonymous
  // visitor could mint a privileged account plus a paying-school record.
  // No customer-facing UI calls it - schools are provisioned by an operator
  // after a signed deal (/admin/school-provisioning) and prospective schools
  // go through the enquiry flow at /school-pilot. It is now gated behind the
  // same site-admin check that guards /api/admin/*. The auth check runs
  // before the rate limiter so anonymous traffic is rejected without
  // consuming a rate-limit slot, and gets an accurate 401 rather than a 429.
  // Named siteAdminAuthError, not authError: `authError` is already taken
  // further down by the Supabase createUser destructure.
  const { user: actingAdmin, error: siteAdminAuthError } = await verifyAdmin()
  if (siteAdminAuthError === 'Unauthorized') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  if (siteAdminAuthError === 'Forbidden') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  // ── Rate limit: 20 provisioning calls per IP per hour ───────────────────
  // Raised from 3/hour: that ceiling existed to slow down anonymous abuse,
  // which the site-admin gate above now removes. Three was too tight for a
  // real operator session (onboarding a multi-academy trust means creating
  // several schools back to back). Kept as defence in depth.
  const ip = getClientIp(request.headers)
  const rl = await rateLimit(`school-register:${ip}`, {
    limit: 20,
    windowSeconds: 3600,
  })
  if (!rl.success) {
    return NextResponse.json(
      { error: 'Too many registration attempts. Please try again later.' },
      {
        status: 429,
        headers: {
          'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)),
        },
      },
    )
  }

  let raw: Record<string, unknown>
  try {
    raw = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 })
  }

  // Support both flat body and nested { school, admin, plan } format
  const schoolObj = (raw.school ?? {}) as Record<string, unknown>
  const adminObj = (raw.admin ?? {}) as Record<string, unknown>
  const planObj = (raw.plan ?? {}) as Record<string, unknown>

  const body: RegisterBody = {
    schoolName: (raw.schoolName ?? schoolObj.schoolName) as string | undefined,
    schoolType: (raw.schoolType ?? schoolObj.schoolType) as string | undefined,
    examBoard: (raw.examBoard ?? schoolObj.examBoard) as string | undefined,
    curriculum: (raw.curriculum ?? schoolObj.curriculum) as string[] | undefined,
    address: (raw.address ?? schoolObj.address) as string | undefined,
    city: (raw.city ?? schoolObj.city) as string | undefined,
    postcode: (raw.postcode ?? schoolObj.postcode) as string | undefined,
    country: (raw.country ?? schoolObj.country) as string | undefined,
    adminFirstName: (raw.adminFirstName ?? adminObj.firstName) as string | undefined,
    adminLastName: (raw.adminLastName ?? adminObj.lastName) as string | undefined,
    jobTitle: (raw.jobTitle ?? adminObj.jobTitle) as string | undefined,
    email: (raw.email ?? adminObj.email) as string | undefined,
    phone: (raw.phone ?? adminObj.phone) as string | undefined,
    password: (raw.password ?? adminObj.password) as string | undefined,
    promoCode: (raw.promoCode ?? planObj.promoCode) as string | undefined,
  }

  // ── Validate required fields ─────────────────────────────────────────────
  const {
    schoolName,
    schoolType,
    examBoard,
    curriculum,
    address,
    city,
    postcode,
    country,
    adminFirstName,
    adminLastName,
    jobTitle,
    email,
    phone,
    password,
    promoCode,
  } = body

  const missing: string[] = []
  if (!schoolName || typeof schoolName !== 'string' || !schoolName.trim()) {
    missing.push('schoolName')
  }
  if (!schoolType || typeof schoolType !== 'string' || !schoolType.trim()) {
    missing.push('schoolType')
  }
  if (!examBoard || typeof examBoard !== 'string' || !examBoard.trim()) {
    missing.push('examBoard')
  }
  if (!curriculum || !Array.isArray(curriculum) || curriculum.length === 0) {
    missing.push('curriculum')
  }
  if (!adminFirstName || typeof adminFirstName !== 'string' || !adminFirstName.trim()) {
    missing.push('adminFirstName')
  }
  if (!adminLastName || typeof adminLastName !== 'string' || !adminLastName.trim()) {
    missing.push('adminLastName')
  }
  if (!email || typeof email !== 'string' || !email.includes('@')) {
    missing.push('email')
  }
  if (!password || typeof password !== 'string' || password.length < 8) {
    missing.push('password (minimum 8 characters)')
  }

  if (missing.length > 0) {
    return NextResponse.json(
      { error: 'Missing or invalid required fields.', fields: missing },
      { status: 422 },
    )
  }

  // ── Validate field lengths ──────────────────────────────────────────────
  if (typeof schoolName === 'string' && schoolName.length > 200) {
    return NextResponse.json(
      { error: 'School name is too long (max 200 characters)' },
      { status: 400 },
    )
  }
  if (typeof address === 'string' && address.length > 200) {
    return NextResponse.json({ error: 'Address is too long (max 200 characters)' }, { status: 400 })
  }
  if (typeof city === 'string' && city.length > 200) {
    return NextResponse.json({ error: 'City is too long (max 200 characters)' }, { status: 400 })
  }
  if (typeof postcode === 'string' && postcode.length > 20) {
    return NextResponse.json({ error: 'Postcode is too long (max 20 characters)' }, { status: 400 })
  }
  if (typeof adminFirstName === 'string' && adminFirstName.length > 50) {
    return NextResponse.json(
      { error: 'First name is too long (max 50 characters)' },
      { status: 400 },
    )
  }
  if (typeof adminLastName === 'string' && adminLastName.length > 50) {
    return NextResponse.json(
      { error: 'Last name is too long (max 50 characters)' },
      { status: 400 },
    )
  }
  if (typeof jobTitle === 'string' && jobTitle.length > 100) {
    return NextResponse.json(
      { error: 'Job title is too long (max 100 characters)' },
      { status: 400 },
    )
  }
  if (typeof phone === 'string' && phone.length > 30) {
    return NextResponse.json(
      { error: 'Phone number is too long (max 30 characters)' },
      { status: 400 },
    )
  }
  if (typeof email === 'string' && email.length > 254) {
    return NextResponse.json({ error: 'Email is too long (max 254 characters)' }, { status: 400 })
  }

  const normalizedEmail = email!.toLowerCase().trim()
  const admin = createServiceRoleClient()

  // ── Validate promo code ──────────────────────────────────────────────────
  let promoResult: PromoResult | null = null
  if (promoCode && promoCode.trim()) {
    const result = await resolvePromoCode(promoCode.trim(), admin)
    if ('error' in result) {
      return NextResponse.json({ error: result.error }, { status: 422 })
    }
    promoResult = result
  }

  const accessType = promoResult?.accessType ?? 'standard'
  const accessUntil = promoResult?.accessUntil ?? null
  // Use 'trialing' as DB value until a migration adds 'founder' to the
  // subscription_status CHECK constraint on the schools table.
  // The accessType field in the API response carries the founder distinction.
  const subscriptionStatus: 'trialing' = 'trialing'

  // ── Generate and verify school slug ─────────────────────────────────────
  const baseSlug = generateSlug(schoolName!.trim())
  if (!baseSlug) {
    return NextResponse.json(
      { error: 'Could not generate a valid school slug from the school name.' },
      { status: 422 },
    )
  }

  // Try base slug, then append incrementing suffix until unique
  let slug = baseSlug
  let slugAttempt = 0
  while (true) {
    const { data: existing } = await admin
      .from('schools')
      .select('id')
      .eq('slug', slug)
      .maybeSingle()

    if (!existing) break

    slugAttempt++
    slug = `${baseSlug}-${slugAttempt}`

    if (slugAttempt > 20) {
      return NextResponse.json(
        { error: 'Could not generate a unique school slug. Please contact support.' },
        { status: 409 },
      )
    }
  }

  // ── Create admin user in Supabase Auth ───────────────────────────────────
  const { data: authData, error: authError } = await admin.auth.admin.createUser({
    email: normalizedEmail,
    password: password!,
    email_confirm: true,
    user_metadata: {
      first_name: adminFirstName!.trim(),
      last_name: adminLastName!.trim(),
      full_name: `${adminFirstName!.trim()} ${adminLastName!.trim()}`,
      role: 'school_admin',
      job_title: jobTitle?.trim() ?? null,
    },
  })

  if (authError || !authData?.user) {
    console.error('[school/register] Auth user creation failed:', authError)

    // DEFECT (2026-08-23 QA): the duplicate-email check used to run before
    // this, as `admin.auth.admin.listUsers()` followed by a `.some()` over
    // the result. listUsers() is paginated and returns only the first page
    // (50 users) unless a page is asked for, so on any real deployment the
    // scan looked at an arbitrary 50 accounts, missed the clash, and the
    // operator got "Failed to create admin account. Please try again." -
    // advice that can never work. It also pulled the whole first page of the
    // auth user list on every provisioning call. GoTrue is the authority on
    // whether an email is taken, so the answer now comes from createUser
    // itself and is reported as a 409 the operator can act on.
    const code = (authError as { code?: string } | null)?.code ?? ''
    const message = authError?.message ?? ''
    const emailTaken =
      code === 'email_exists' || /already been registered|already exists/i.test(message)
    if (emailTaken) {
      return NextResponse.json(
        { error: 'An account with this email address already exists.' },
        { status: 409 },
      )
    }

    return NextResponse.json(
      {
        error: 'Failed to create admin account. Please try again.',
        // Same reasoning as the schools/school_members inserts below: this
        // endpoint is site-admin only, and an operator needs the real reason.
        detail: message || null,
      },
      { status: 500 },
    )
  }

  const adminUserId = authData.user.id

  // ── Create school record ─────────────────────────────────────────────────
  // access_type / access_until / promo_code_used are PERSISTED (columns from
  // 20260404_school_promo_and_access.sql). Previously the resolved promo
  // outcome was only echoed in the API response and discarded, so
  // getSchoolAccess (and GET /api/school/access, which the dashboard and
  // billing page read) could never see the real expiry. The schools row is
  // the single server-side source of truth for access expiry; for FOUNDER
  // that is the 2026-08-31 data value.
  const schoolInsert: Record<string, unknown> = {
    name: schoolName!.trim(),
    slug,
    address: address?.trim() ?? null,
    city: city?.trim() ?? null,
    postcode: postcode?.trim() ?? null,
    contact_email: normalizedEmail,
    contact_phone: phone?.trim() ?? null,
    school_type: schoolType!.trim(),
    exam_board: examBoard!.trim(),
    curriculum: curriculum ?? [],
    subscription_status: subscriptionStatus,
    subscription_plan: 'school',
    seat_limit: 9999,
    // The schools.access_type CHECK allows trial/founder/paid/expired, so
    // the resolver's 'standard' maps onto 'trial'.
    access_type: accessType === 'founder' ? 'founder' : 'trial',
    access_until: accessUntil,
    promo_code_used: promoCode?.trim() ? promoCode.trim().toUpperCase() : null,
  }

  const { data: school, error: schoolError } = await admin
    .from('schools')
    .insert(schoolInsert)
    .select('id')
    .single()

  if (schoolError || !school) {
    // Roll back: delete the auth user we just created
    await admin.auth.admin.deleteUser(adminUserId)
    console.error('[school/register] School creation failed:', schoolError)
    // `detail` carries the Postgres/PostgREST message through to the caller.
    // "Please try again" is useless advice for a schema or constraint failure,
    // and an operator provisioning a signed school needs to know which column
    // or CHECK rejected the row. Safe to expose now the endpoint is
    // site-admin only; it was not safe when this route was public.
    return NextResponse.json(
      {
        error: 'Failed to create school record. Please try again.',
        detail: schoolError?.message ?? null,
      },
      { status: 500 },
    )
  }

  const schoolId = school.id as string

  // ── Create school_members record for admin ───────────────────────────────
  const { error: memberError } = await admin.from('school_members').insert({
    school_id: schoolId,
    user_id: adminUserId,
    role: 'admin',
    full_name: `${adminFirstName!.trim()} ${adminLastName!.trim()}`,
    email: normalizedEmail,
    department: 'English',
    invite_status: 'accepted',
    accepted_at: new Date().toISOString(),
  })

  if (memberError) {
    // Best-effort rollback
    await admin.from('schools').delete().eq('id', schoolId)
    await admin.auth.admin.deleteUser(adminUserId)
    console.error('[school/register] school_members insert failed:', memberError)
    // See the note on the schools insert above: the underlying DB message is
    // returned so the provisioning operator can act on it.
    return NextResponse.json(
      {
        error: 'Failed to create school membership. Please try again.',
        detail: memberError.message ?? null,
      },
      { status: 500 },
    )
  }

  // ── Upsert profile with school_id and role ───────────────────────────────
  const profileUpsert: Record<string, unknown> = {
    id: adminUserId,
    email: normalizedEmail,
    full_name: `${adminFirstName!.trim()} ${adminLastName!.trim()}`,
    role: 'school_admin',
    school_name: schoolName!.trim(),
  }

  const { error: profileError } = await admin
    .from('profiles')
    .upsert(profileUpsert, { onConflict: 'id' })

  if (profileError) {
    // Non-fatal: log and continue - the user and school exist
    console.warn('[school/register] Profile upsert failed (non-fatal):', profileError)
  }

  // Update auth user metadata to include school_id
  await admin.auth.admin.updateUserById(adminUserId, {
    user_metadata: {
      first_name: adminFirstName!.trim(),
      last_name: adminLastName!.trim(),
      full_name: `${adminFirstName!.trim()} ${adminLastName!.trim()}`,
      role: 'school_admin',
      school_id: schoolId,
      job_title: jobTitle?.trim() ?? null,
    },
  })

  // ── Increment promo code uses if applicable ──────────────────────────────
  if (promoCode && promoCode.trim() && promoCode.toUpperCase() !== 'FOUNDER' && promoResult) {
    await admin.rpc('increment_promo_uses', { promo_code: promoCode.trim().toUpperCase() }).then(
      () => {},
      (err: unknown) => {
        // Non-fatal: use count may be tracked differently
        console.warn('[school/register] Failed to increment promo uses:', err)
      },
    )
  }

  // ── Send welcome email (log only - no sendEmail utility found) ───────────
  // The acting operator is logged too: now that provisioning is site-admin
  // only, "who created this school" needs to be answerable from the logs.
  console.info(
    `[school/register] New school registered: ${schoolName} (${slug}) | admin: ${normalizedEmail} | access: ${accessType} | provisioned by: ${actingAdmin?.email ?? 'unknown'}`,
  )

  // ── Return success ───────────────────────────────────────────────────────
  return NextResponse.json(
    {
      success: true,
      schoolId,
      adminUserId,
      accessType,
      accessUntil,
      slug,
    },
    { status: 201 },
  )
}
