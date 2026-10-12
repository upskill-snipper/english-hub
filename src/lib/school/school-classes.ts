/**
 * A school's classes, as the pupil upload matches them.
 *
 * A pupil row names its class by code ("10A"), and the code is the class's
 * `classes.name`. The match is trimmed and case-insensitive, within one
 * school, against its ACTIVE classes only. Validation, the commit and the
 * operator's pupil step all use this, so a code the preview accepts is a code
 * the commit places.
 *
 * WHY THIS IS SHARED (12 October 2026). The validate route selected a `code`
 * column that `classes` does not have. PostgREST refuses the whole select when
 * one column is unknown, the route swallowed the error, and every preview
 * showed "Class codes could not be validated" while letting any code through.
 * The live columns are id, school_id, teacher_id, name, year_group,
 * exam_board, academic_year, student_count, is_active, created_at and
 * updated_at; only `name` holds the code.
 */

import type { SupabaseClient } from '@supabase/supabase-js'

/** The form a class code is compared in. */
export function classKey(code: string): string {
  return code.trim().toLowerCase()
}

export interface ActiveClass {
  readonly id: string
  readonly name: string
}

/**
 * The school's active classes, or the database's reason for not returning
 * them. Never an empty list in place of an error: an empty list would read as
 * "this school has no classes" and every row would be refused, or worse,
 * placed nowhere without a word.
 */
export async function loadActiveClasses(
  client: SupabaseClient,
  schoolId: string,
): Promise<{ classes: ActiveClass[]; error: null } | { classes: null; error: string }> {
  const { data, error } = await client
    .from('classes')
    .select('id, name')
    .eq('school_id', schoolId)
    .eq('is_active', true)
  if (error) return { classes: null, error: error.message || 'classes read failed' }
  const classes = ((data ?? []) as Array<{ id: unknown; name: unknown }>)
    .filter((c) => typeof c.id === 'string' && typeof c.name === 'string')
    .map((c) => ({ id: c.id as string, name: c.name as string }))
  return { classes, error: null }
}
