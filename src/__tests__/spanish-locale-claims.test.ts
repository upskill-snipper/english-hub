import { describe, it, expect } from 'vitest'
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { lookup } from '@/lib/i18n/dictionary'
import { ES_MESSAGES } from '@/lib/i18n/generated/es'
import { EN_MESSAGES } from '@/lib/i18n/generated/en'
import { AR_MESSAGES } from '@/lib/i18n/generated/ar'

/**
 * Spanish is an INTERFACE locale, and every published claim must say so.
 *
 * What the code actually does, verified 18 September 2026 (including a live
 * probe of production):
 *   - the header toggle offers "Español" and writes `eh-lang=es`;
 *   - `src/middleware.ts` accepts that cookie and stamps `x-lang=es`;
 *   - the root layout renders `<html lang="es">`;
 *   - ~16.8k dictionary keys give the interface in Spanish.
 *   - `/es` is a 404. There is no Spanish URL surface, and no Spanish
 *     STUDY content: zero `.es.mdx` posts against 40 `.ar.mdx`, and no
 *     `*Es` content fields against thousands of `*Ar` ones. AI marking has
 *     an Arabic directive only, so a Spanish reader's feedback is English.
 *
 * So "you can read the site in Spanish" is true of the interface and false
 * of the material a student revises from. The cookie policy and the language
 * tooltip are the two places that told a user otherwise; this test keeps
 * them tied to the code. The day real Spanish content ships, these
 * assertions should be changed deliberately, alongside the `/es` routing
 * checklist in `src/middleware.ts`.
 */

function read(relative: string): string {
  return readFileSync(join(process.cwd(), relative), 'utf8')
}

const middlewareSource = read('src/middleware.ts')
const cookiePolicySource = read('src/app/cookie-policy/page.tsx')
const toggleSource = read('src/components/layout/language-toggle.tsx')

/** Blog posts carry `<slug>.<locale>.mdx` translations beside the English file. */
function countTranslations(suffix: string): number {
  const dir = join(process.cwd(), 'content', 'blog')
  if (!existsSync(dir)) return 0
  return readdirSync(dir).filter((f) => f.endsWith(suffix)).length
}

describe('Spanish locale: the product is interface-only, and the claims say so', () => {
  // ── The premises the wording below depends on ──────────────────────
  it('there is no Spanish URL surface, so no page may advertise one', () => {
    expect(existsSync(join(process.cwd(), 'src', 'app', 'es'))).toBe(false)
    // The Arabic URL branch is the shape an `/es` branch would copy.
    expect(middlewareSource).toContain("pathname.startsWith('/ar/')")
    expect(middlewareSource).not.toContain("pathname.startsWith('/es/')")
  })

  it('there is no Spanish study content, which is why /es was not routed', () => {
    expect(countTranslations('.ar.mdx')).toBeGreaterThan(0)
    expect(countTranslations('.es.mdx')).toBe(0)
  })

  it('Spanish IS reachable through the header toggle, so the cookie claim is honest', () => {
    expect(toggleSource).toContain("value: 'es'")
    expect(toggleSource).toContain('Español')
    expect(toggleSource).toContain("const COOKIE = 'eh-lang'")
    // The middleware must accept the value the toggle writes, otherwise the
    // cookie policy would be describing a cookie that does nothing.
    expect(middlewareSource).toContain("const LANG_VALUES = new Set(['en', 'ar', 'es'])")
  })

  // ── The claims themselves ──────────────────────────────────────────
  const TOOLTIP = 'lang.es.tooltip'

  it('the language tooltip does not promise Spanish content in any locale', () => {
    expect(lookup(TOOLTIP, 'en')).not.toMatch(/content in Spanish/i)
    expect(lookup(TOOLTIP, 'es')).not.toMatch(/contenido en español/i)
    expect(lookup(TOOLTIP, 'ar')).not.toContain('المحتوى بالإسباني')
  })

  it('the language tooltip says interface in Spanish, study material in English', () => {
    expect(lookup(TOOLTIP, 'en')).toBe(
      'Spanish mode - interface in Spanish, study material in English',
    )
    expect(lookup(TOOLTIP, 'es')).toContain('interfaz en español')
    expect(lookup(TOOLTIP, 'es')).toContain('material de estudio en inglés')
    expect(lookup(TOOLTIP, 'ar')).toContain('الواجهة بالإسباني')
    expect(lookup(TOOLTIP, 'ar')).toContain('المواد الدراسية بالإنجليزي')
  })

  it('the generated locale maps carry the corrected wording, not a stale build', () => {
    // A corrected dictionary with stale generated maps would still serve the
    // old claim to every client component. `npm run i18n:generate` fixes it.
    expect(EN_MESSAGES[TOOLTIP]).toBe(lookup(TOOLTIP, 'en'))
    expect(AR_MESSAGES[TOOLTIP]).toBe(lookup(TOOLTIP, 'ar'))
    expect(ES_MESSAGES[TOOLTIP]).toBe(lookup(TOOLTIP, 'es'))
  })

  it('the cookie policy no longer says pages load in your language', () => {
    expect(cookiePolicySource).not.toContain('so pages load in your language')
    expect(cookiePolicySource).not.toContain('عشان الصفحات تفتح بلغتك')
    expect(cookiePolicySource).not.toContain('para que las páginas se carguen en tu idioma')
  })

  it('the cookie policy states the English-study-material caveat in all three locales', () => {
    expect(cookiePolicySource).toContain('Study material is in English.')
    expect(cookiePolicySource).toContain('المواد الدراسية بالإنجليزي.')
    expect(cookiePolicySource).toContain('El material de estudio está en inglés.')
  })

  it('the cookie policy still lists the language cookie it really sets', () => {
    expect(cookiePolicySource).toContain(
      'Remembers whether you are reading the site in English, Arabic or Spanish',
    )
    expect(middlewareSource).toContain("const LANG_COOKIE = 'eh-lang'")
  })

  // ── Forward guard ──────────────────────────────────────────────────
  it('any future /es branch must carry the /ar branch auth fix', () => {
    const hasEsBranch =
      middlewareSource.includes("pathname.startsWith('/es/')") ||
      existsSync(join(process.cwd(), 'src', 'app', 'es'))
    if (!hasEsBranch) return
    // The 2026-08-23 bypass: the `/ar` branch returned a rewrite without
    // running the Supabase session logic, so `/ar/dashboard` skipped the
    // auth wall. A copied `/es` branch must pass the STRIPPED path to
    // updateSession and honour its redirect.
    expect(middlewareSource).toContain('updateSession(request, strippedPath)')
    // And the interface-only wording above is no longer the right claim.
    expect(
      false,
      'A Spanish URL surface now exists. Re-examine every interface-only claim in this test.',
    ).toBe(true)
  })
})
