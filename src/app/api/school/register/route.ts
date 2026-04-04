import { NextRequest, NextResponse } from "next/server";
import { createServiceRoleClient } from "@/lib/supabase/server";
import { rateLimit, getClientIp } from "@/lib/rate-limit";

export const dynamic = "force-dynamic";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface RegisterBody {
  schoolName?: string;
  schoolType?: string;
  examBoard?: string;
  curriculum?: string[];
  address?: string;
  city?: string;
  postcode?: string;
  country?: string;
  adminFirstName?: string;
  adminLastName?: string;
  jobTitle?: string;
  email?: string;
  phone?: string;
  password?: string;
  promoCode?: string;
}

interface PromoResult {
  accessType: "founder" | "standard";
  accessUntil: string | null;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

async function resolvePromoCode(
  code: string,
  admin: ReturnType<typeof createServiceRoleClient>
): Promise<PromoResult | { error: string }> {
  if (code.toUpperCase() === "FOUNDER") {
    return {
      accessType: "founder",
      accessUntil: "2026-08-31",
    };
  }

  // Check promo_codes table
  const { data: promo, error } = await admin
    .from("promo_codes")
    .select("id, discount_percent, access_until, is_active, max_uses, uses")
    .eq("code", code.toUpperCase())
    .single();

  if (error || !promo) {
    return { error: "Invalid promo code." };
  }

  if (!promo.is_active) {
    return { error: "This promo code is no longer active." };
  }

  if (promo.max_uses !== null && promo.uses >= promo.max_uses) {
    return { error: "This promo code has reached its usage limit." };
  }

  return {
    accessType: "standard",
    accessUntil: promo.access_until ?? null,
  };
}

// ---------------------------------------------------------------------------
// POST /api/school/register
// ---------------------------------------------------------------------------

export async function POST(request: NextRequest): Promise<NextResponse> {
  // ── Rate limit: 3 registrations per IP per hour ──────────────────────────
  const ip = getClientIp(request.headers);
  const rl = await rateLimit(`school-register:${ip}`, {
    limit: 3,
    windowSeconds: 3600,
  });
  if (!rl.success) {
    return NextResponse.json(
      { error: "Too many registration attempts. Please try again later." },
      {
        status: 429,
        headers: {
          "Retry-After": String(Math.ceil((rl.resetAt - Date.now()) / 1000)),
        },
      }
    );
  }

  let raw: Record<string, unknown>;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  // Support both flat body and nested { school, admin, plan } format
  const schoolObj = (raw.school ?? {}) as Record<string, unknown>;
  const adminObj = (raw.admin ?? {}) as Record<string, unknown>;
  const planObj = (raw.plan ?? {}) as Record<string, unknown>;

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
  };

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
  } = body;

  const missing: string[] = [];
  if (!schoolName || typeof schoolName !== "string" || !schoolName.trim()) {
    missing.push("schoolName");
  }
  if (!schoolType || typeof schoolType !== "string" || !schoolType.trim()) {
    missing.push("schoolType");
  }
  if (!examBoard || typeof examBoard !== "string" || !examBoard.trim()) {
    missing.push("examBoard");
  }
  if (!curriculum || !Array.isArray(curriculum) || curriculum.length === 0) {
    missing.push("curriculum");
  }
  if (
    !adminFirstName ||
    typeof adminFirstName !== "string" ||
    !adminFirstName.trim()
  ) {
    missing.push("adminFirstName");
  }
  if (
    !adminLastName ||
    typeof adminLastName !== "string" ||
    !adminLastName.trim()
  ) {
    missing.push("adminLastName");
  }
  if (!email || typeof email !== "string" || !email.includes("@")) {
    missing.push("email");
  }
  if (!password || typeof password !== "string" || password.length < 8) {
    missing.push("password (minimum 8 characters)");
  }

  if (missing.length > 0) {
    return NextResponse.json(
      { error: "Missing or invalid required fields.", fields: missing },
      { status: 422 }
    );
  }

  const normalizedEmail = email!.toLowerCase().trim();
  const admin = createServiceRoleClient();

  // ── Check email not already registered ──────────────────────────────────
  const { data: existingUsers } = await admin.auth.admin.listUsers();
  const emailTaken = existingUsers?.users?.some(
    (u) => u.email?.toLowerCase() === normalizedEmail
  );
  if (emailTaken) {
    return NextResponse.json(
      { error: "An account with this email address already exists." },
      { status: 409 }
    );
  }

  // ── Validate promo code ──────────────────────────────────────────────────
  let promoResult: PromoResult | null = null;
  if (promoCode && promoCode.trim()) {
    const result = await resolvePromoCode(promoCode.trim(), admin);
    if ("error" in result) {
      return NextResponse.json({ error: result.error }, { status: 422 });
    }
    promoResult = result;
  }

  const accessType = promoResult?.accessType ?? "standard";
  const accessUntil = promoResult?.accessUntil ?? null;
  // Use 'trialing' as DB value until a migration adds 'founder' to the
  // subscription_status CHECK constraint on the schools table.
  // The accessType field in the API response carries the founder distinction.
  const subscriptionStatus: "trialing" = "trialing";

  // ── Generate and verify school slug ─────────────────────────────────────
  const baseSlug = generateSlug(schoolName!.trim());
  if (!baseSlug) {
    return NextResponse.json(
      { error: "Could not generate a valid school slug from the school name." },
      { status: 422 }
    );
  }

  // Try base slug, then append incrementing suffix until unique
  let slug = baseSlug;
  let slugAttempt = 0;
  while (true) {
    const { data: existing } = await admin
      .from("schools")
      .select("id")
      .eq("slug", slug)
      .maybeSingle();

    if (!existing) break;

    slugAttempt++;
    slug = `${baseSlug}-${slugAttempt}`;

    if (slugAttempt > 20) {
      return NextResponse.json(
        { error: "Could not generate a unique school slug. Please contact support." },
        { status: 409 }
      );
    }
  }

  // ── Create admin user in Supabase Auth ───────────────────────────────────
  const { data: authData, error: authError } =
    await admin.auth.admin.createUser({
      email: normalizedEmail,
      password: password!,
      email_confirm: true,
      user_metadata: {
        first_name: adminFirstName!.trim(),
        last_name: adminLastName!.trim(),
        full_name: `${adminFirstName!.trim()} ${adminLastName!.trim()}`,
        role: "school_admin",
        job_title: jobTitle?.trim() ?? null,
      },
    });

  if (authError || !authData?.user) {
    console.error("[school/register] Auth user creation failed:", authError);
    return NextResponse.json(
      { error: "Failed to create admin account. Please try again." },
      { status: 500 }
    );
  }

  const adminUserId = authData.user.id;

  // ── Create school record ─────────────────────────────────────────────────
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
    subscription_plan: "school",
    seat_limit: 9999,
  };

  const { data: school, error: schoolError } = await admin
    .from("schools")
    .insert(schoolInsert)
    .select("id")
    .single();

  if (schoolError || !school) {
    // Roll back: delete the auth user we just created
    await admin.auth.admin.deleteUser(adminUserId);
    console.error("[school/register] School creation failed:", schoolError);
    return NextResponse.json(
      { error: "Failed to create school record. Please try again." },
      { status: 500 }
    );
  }

  const schoolId = school.id as string;

  // ── Create school_members record for admin ───────────────────────────────
  const { error: memberError } = await admin.from("school_members").insert({
    school_id: schoolId,
    user_id: adminUserId,
    role: "admin",
    full_name: `${adminFirstName!.trim()} ${adminLastName!.trim()}`,
    email: normalizedEmail,
    department: "English",
    invite_status: "accepted",
    accepted_at: new Date().toISOString(),
  });

  if (memberError) {
    // Best-effort rollback
    await admin.from("schools").delete().eq("id", schoolId);
    await admin.auth.admin.deleteUser(adminUserId);
    console.error("[school/register] school_members insert failed:", memberError);
    return NextResponse.json(
      { error: "Failed to create school membership. Please try again." },
      { status: 500 }
    );
  }

  // ── Upsert profile with school_id and role ───────────────────────────────
  const profileUpsert: Record<string, unknown> = {
    id: adminUserId,
    email: normalizedEmail,
    full_name: `${adminFirstName!.trim()} ${adminLastName!.trim()}`,
    role: "school_admin",
    school_name: schoolName!.trim(),
  };

  const { error: profileError } = await admin
    .from("profiles")
    .upsert(profileUpsert, { onConflict: "id" });

  if (profileError) {
    // Non-fatal: log and continue — the user and school exist
    console.warn(
      "[school/register] Profile upsert failed (non-fatal):",
      profileError
    );
  }

  // Update auth user metadata to include school_id
  await admin.auth.admin.updateUserById(adminUserId, {
    user_metadata: {
      first_name: adminFirstName!.trim(),
      last_name: adminLastName!.trim(),
      full_name: `${adminFirstName!.trim()} ${adminLastName!.trim()}`,
      role: "school_admin",
      school_id: schoolId,
      job_title: jobTitle?.trim() ?? null,
    },
  });

  // ── Increment promo code uses if applicable ──────────────────────────────
  if (
    promoCode &&
    promoCode.trim() &&
    promoCode.toUpperCase() !== "FOUNDER" &&
    promoResult
  ) {
    await admin.rpc("increment_promo_uses", { promo_code: promoCode.trim().toUpperCase() }).then(
      () => {},
      (err: unknown) => {
        // Non-fatal: use count may be tracked differently
        console.warn("[school/register] Failed to increment promo uses:", err);
      }
    );
  }

  // ── Send welcome email (log only — no sendEmail utility found) ───────────
  console.info(
    `[school/register] New school registered: ${schoolName} (${slug}) | admin: ${normalizedEmail} | access: ${accessType}`
  );

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
    { status: 201 }
  );
}
