/**
 * POST /api/admin/schools/[schoolId]/ai-authorisation
 *
 * Records that a school, as data controller, has confirmed in writing that its
 * privacy notice covers AI marking and that parents have been told
 * (src/lib/school/ai-authorisation.ts has the statement and the decision
 * behind it).
 *
 * Body: `{ confirmed: true, note: string }`.
 *   - `confirmed` must be exactly true: the operator ticked the statement.
 *   - `note` must say where the school's written confirmation is held (an
 *     email, a signed letter in a folder). Required and not blank, because an
 *     authorisation nobody can trace back to the school's own words is not one.
 *
 * Sets schools.ai_authorised_at to now and ai_authorised_by to the operator's
 * Supabase user id, then writes the statement, the note and the previous
 * values to the AuditLog (kept for compliance; see docs/system/02). The note
 * has no column of its own, so the AuditLog entry is where it lives. If that
 * entry cannot be written, the school's change is undone and the operator
 * told nothing was recorded; if the undo also fails, the response says
 * exactly that. Recording again replaces the date and adds a new entry.
 *
 * Site administrators only (verifyAdmin); the school is the one in the path.
 */

import { NextRequest, NextResponse } from 'next/server'

import { prisma } from '@/lib/prisma'
import { createServiceRoleClient } from '@/lib/supabase/server'
import {
  AI_AUTHORISATION_AUDIT_ACTION,
  AI_AUTHORISATION_NOTE_MAX,
  AI_AUTHORISATION_STATEMENT,
} from '@/lib/school/ai-authorisation'
import { loadSchool, operatorRateLimit, requireOperator } from '@/lib/school/operator-access'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest, props: { params: Promise<{ schoolId: string }> }) {
  try {
    const { schoolId } = await props.params

    const gate = await requireOperator()
    if (gate.response) return gate.response
    const limited = await operatorRateLimit(gate.user.id, 'admin-schools-write', 30)
    if (limited) return limited

    const admin = createServiceRoleClient()
    const loaded = await loadSchool(admin, schoolId)
    if (loaded.response) return loaded.response
    const school = loaded.school

    let body: { confirmed?: unknown; note?: unknown }
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
    }
    if (!body || typeof body !== 'object' || body.confirmed !== true) {
      return NextResponse.json(
        {
          error: `Tick the statement to confirm it: "${AI_AUTHORISATION_STATEMENT}". (confirmed must be true.)`,
        },
        { status: 422 },
      )
    }
    const note = typeof body.note === 'string' ? body.note.trim() : ''
    if (!note) {
      return NextResponse.json(
        { error: "Say where the school's written confirmation is held. (note is required.)" },
        { status: 422 },
      )
    }
    if (note.length > AI_AUTHORISATION_NOTE_MAX) {
      return NextResponse.json(
        { error: `Keep the note under ${AI_AUTHORISATION_NOTE_MAX} characters.` },
        { status: 422 },
      )
    }

    const authorisedAt = new Date().toISOString()
    const { data: updated, error: updateError } = await admin
      .from('schools')
      .update({ ai_authorised_at: authorisedAt, ai_authorised_by: gate.user.id })
      .eq('id', school.id)
      .select('id, ai_authorised_at, ai_authorised_by')
      .maybeSingle()
    if (updateError || !updated) {
      console.error('[admin/schools] AI authorisation update failed', school.id, updateError)
      return NextResponse.json(
        {
          error: 'The authorisation could not be saved, so nothing was recorded.',
          detail: updateError?.message ?? 'no row was updated',
        },
        { status: 500 },
      )
    }

    try {
      await prisma.auditLog.create({
        data: {
          // AuditLog.userId is a Prisma User id; an operator may have none,
          // so who acted is recorded in details by their Supabase id.
          userId: null,
          action: AI_AUTHORISATION_AUDIT_ACTION,
          resource: 'School',
          resourceId: school.id,
          details: {
            statement: AI_AUTHORISATION_STATEMENT,
            note,
            schoolName: school.name,
            authorisedAt,
            authorisedBy: gate.user.id,
            authorisedByEmail: gate.user.email ?? null,
            previous: { at: school.ai_authorised_at, by: school.ai_authorised_by },
          },
          ipAddress: 'admin',
        },
      })
    } catch (auditError) {
      console.error('[admin/schools] AI authorisation audit entry failed', school.id, auditError)
      const { error: revertError } = await admin
        .from('schools')
        .update({
          ai_authorised_at: school.ai_authorised_at,
          ai_authorised_by: school.ai_authorised_by,
        })
        .eq('id', school.id)
      const detail = auditError instanceof Error ? auditError.message : String(auditError)
      if (revertError) {
        console.error('[admin/schools] AI authorisation revert failed', school.id, revertError)
        return NextResponse.json(
          {
            error:
              'The school is now marked as authorised, but the note could not be stored and the change could not be undone. Record it again to store the note.',
            detail,
          },
          { status: 500 },
        )
      }
      return NextResponse.json(
        {
          error:
            'The note could not be stored, so the authorisation was not recorded. Nothing changed.',
          detail,
        },
        { status: 500 },
      )
    }

    return NextResponse.json({
      schoolId: school.id,
      aiAuthorisedAt: updated.ai_authorised_at,
      aiAuthorisedBy: updated.ai_authorised_by,
      note,
    })
  } catch (err) {
    console.error('[admin/schools] AI authorisation error', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
