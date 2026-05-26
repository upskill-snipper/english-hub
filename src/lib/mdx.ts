/**
 * Shared MDX helper.
 *
 * Reads MDX files from a directory on disk, parses gray-matter frontmatter
 * and returns typed records. Designed to be reused by `/blog`, the
 * teaching `/printables`, the `/lesson-plans` library and any future MDX
 * surface (essentially anywhere we want to author long-form content as
 * `.mdx` files in the `content/` tree rather than hand-coded React).
 *
 * Server-only (uses `node:fs`). Never import from a client component or
 * Edge runtime.
 */

import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

/** Absolute path to the project's `content/` root. */
const CONTENT_ROOT = path.join(process.cwd(), 'content')

/** Result of parsing one MDX file. Shape mirrors what `gray-matter` returns. */
export type ParsedMdxFile<TFrontmatter extends Record<string, unknown>> = {
  /** Slug derived from the filename (e.g. `hello-world` for `hello-world.mdx`). */
  slug: string
  /** Absolute filesystem path of the MDX file. */
  filePath: string
  /** Raw MDX body (the bit after the frontmatter fence). */
  content: string
  /** Validated frontmatter cast to `TFrontmatter` by the caller. */
  data: TFrontmatter
}

/**
 * Resolve an absolute directory under `content/`.
 *
 * The caller passes a path relative to the `content/` root (e.g. `'blog'`
 * or `'resources/teaching/printables'`). We do not read filesystem entries
 * outside of the content tree.
 */
export function resolveContentDir(relativeDir: string): string {
  return path.join(CONTENT_ROOT, relativeDir)
}

/**
 * Return the slugs of every `.mdx` file in `content/<relativeDir>`.
 *
 * Returns an empty array if the directory does not exist - sibling
 * surfaces under construction can still build before any content lands.
 * Hidden files (starting with `.`) and non-`.mdx` files are ignored.
 */
export function listMdxSlugs(relativeDir: string): string[] {
  const dir = resolveContentDir(relativeDir)
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter((entry) => entry.endsWith('.mdx') && !entry.startsWith('.'))
    .map((entry) => entry.replace(/\.mdx$/, ''))
    .sort()
}

/**
 * Read and parse one MDX file by `slug`.
 *
 * Returns `null` if the file is missing - callers should treat that as a
 * 404. Throws if the file exists but cannot be read or parsed.
 */
export function readMdxFile<TFrontmatter extends Record<string, unknown>>(
  relativeDir: string,
  slug: string,
): ParsedMdxFile<TFrontmatter> | null {
  const filePath = path.join(resolveContentDir(relativeDir), `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf8')
  const parsed = matter(raw)

  return {
    slug,
    filePath,
    content: parsed.content,
    data: parsed.data as TFrontmatter,
  }
}

/**
 * Read and parse every `.mdx` file in `content/<relativeDir>`.
 *
 * Each entry is parsed lazily - if a single file fails to parse the error
 * propagates so the build fails loudly rather than silently dropping a
 * post.
 */
export function readAllMdxFiles<TFrontmatter extends Record<string, unknown>>(
  relativeDir: string,
): ParsedMdxFile<TFrontmatter>[] {
  return listMdxSlugs(relativeDir)
    .map((slug) => readMdxFile<TFrontmatter>(relativeDir, slug))
    .filter((entry): entry is ParsedMdxFile<TFrontmatter> => entry !== null)
}
