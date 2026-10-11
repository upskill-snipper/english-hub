// ─── Bounded concurrency ─────────────────────────────────────────────────────
//
// A school bulk upload makes one Supabase admin call per pupil, for up to 500
// pupils. One at a time that is minutes, longer than the function may run; all
// at once it is a burst no API should be sent. This runs a fixed number at a
// time. Written for that route on 11 October 2026; general enough to reuse.
// ────────────────────────────────────────────────────────────────────────────

/**
 * Call `fn` for each item with at most `limit` calls in flight, starting them
 * in input order. Resolves to the results in input order.
 *
 * `shouldStart`, when given, is asked before each new call. Once it returns
 * false no further calls start (those in flight still finish) and the items
 * never started resolve to `undefined`, so the caller can tell "not attempted"
 * from any value `fn` returns. A rejection from `fn` rejects the whole run, as
 * with Promise.all; callers that must not lose a run catch inside `fn`.
 */
export async function mapWithConcurrency<T, R>(
  items: readonly T[],
  limit: number,
  fn: (item: T, index: number) => Promise<R>,
  shouldStart: () => boolean = () => true,
): Promise<Array<R | undefined>> {
  const results: Array<R | undefined> = new Array(items.length).fill(undefined)
  let next = 0
  let stopped = false
  const worker = async () => {
    while (!stopped && next < items.length) {
      if (!shouldStart()) {
        stopped = true
        return
      }
      const index = next
      next += 1
      results[index] = await fn(items[index], index)
    }
  }
  const workers = Array.from({ length: Math.max(1, Math.min(limit, items.length)) }, worker)
  await Promise.all(workers)
  return results
}
