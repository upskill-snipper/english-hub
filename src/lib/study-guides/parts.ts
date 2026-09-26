/**
 * The part of a text a moment belongs to: its reference up to the first comma,
 * so "Act 3, Scene 4" is in "Act 3" and "Chapter 2, the fog" in "Chapter 2". A
 * reference with no comma is its own part.
 *
 * Shared by the scene player, which groups moments into parts, and by the act
 * and chapter pages, which keep only their own. It lives here rather than in
 * the client component because a function exported from a 'use client' module
 * reaches a server component as a client reference, not as a function.
 */
export function partOf(where: string): string {
  return where.split(',')[0].trim()
}

/**
 * Whether a moment's reference falls in the named part. Exact on the part, so
 * "Chapter 1" does not also collect Chapters 10 to 19, which a plain prefix
 * match would.
 */
export function inPart(where: string, part: string): boolean {
  return partOf(where).toLowerCase() === part.trim().toLowerCase()
}
