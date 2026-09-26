/**
 * A stable id prefix for one piece: `lc-<slug>-<key>`, where the key is the
 * moment title or the character's name. Each plate namespaces its filters and
 * clip paths with it, so two pieces on one page never share an id. Stable
 * rather than generated, so the server HTML and the client agree.
 */
export function pieceUid(slug: string, key: string): string {
  const k = key
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
  return `lc-${slug}-${k}`
}
