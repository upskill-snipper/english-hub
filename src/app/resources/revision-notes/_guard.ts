import { redirect } from "next/navigation";
import { getServerBoard } from "@/lib/board/get-server-board";
import { textAvailableForBoard } from "@/lib/board/set-texts";

/**
 * Map from the directory slug used under /resources/revision-notes/<slug>/
 * to the canonical slug used by set-texts.ts (our source of truth for
 * which exam boards study which text).
 *
 * Only the slugs that actually differ need an entry. Texts not present in
 * set-texts.ts (e.g. "the-crucible", "woman-in-black") should NOT be
 * listed and are treated as "unknown — do not block".
 */
const LOCAL_SLUG_TO_SET_TEXT_SLUG: Record<string, string> = {
  "christmas-carol": "a-christmas-carol",
  "inspector-calls": "an-inspector-calls",
  "merchant-of-venice": "the-merchant-of-venice",
  "sign-of-four": "the-sign-of-four",
  "view-from-the-bridge": "a-view-from-the-bridge",
  "much-ado": "much-ado-about-nothing",
};

/**
 * Slugs that we know are NOT in set-texts and should be left alone
 * (no redirect based on set-texts, as set-texts has no data).
 */
const UNKNOWN_TEXT_SLUGS = new Set(["the-crucible", "woman-in-black"]);

/**
 * Called from a revision-notes text layout. If the user's selected board
 * does not study this text, redirect them back to the revision-texts
 * hub so they only ever see content that matches their board.
 */
export async function guardTextForBoard(localSlug: string): Promise<void> {
  if (UNKNOWN_TEXT_SLUGS.has(localSlug)) return;

  const board = await getServerBoard();
  // No board chosen — leave the page accessible.
  if (!board) return;

  const canonicalSlug = LOCAL_SLUG_TO_SET_TEXT_SLUG[localSlug] ?? localSlug;
  if (!textAvailableForBoard(canonicalSlug, board)) {
    redirect("/revision/texts");
  }
}
