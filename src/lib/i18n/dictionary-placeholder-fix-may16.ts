/**
 * Placeholder override - 2026-05-16
 *
 * A deep SEO audit found the /pricing and /for-teachers pages rendering
 * literal "Heading", "Subheading Intro", "Apply Code" as visible body
 * text. Root cause: the embedded <AffiliateCodeField> and
 * <PromoCodePrompt> components call `billing.affiliate.*` /
 * `billing.trial.*` keys that exist ONLY in dictionary-audit-fix.ts
 * with auto-generated junk values (the Title-cased last path segment).
 *
 * This file supplies real UK-English copy for every billing.* key the
 * two components touch, plus `billing.affiliate.on_annual_label` which
 * was MISSING entirely (rendered as the literal [[billing.affiliate.on_annual_label]]).
 *
 * It is wired into lookup() BEFORE AUDIT_FIX_DICTIONARY so it wins on
 * collision (same precedence slot as PRESS_AND_VERIFIED_FIX). AR mirrors
 * EN as a graceful fallback until the next ar_translator sweep.
 */

import type { Dictionary } from './dictionary'

export const PLACEHOLDER_FIX_MAY16: Dictionary = {
  // ── Affiliate / access-code field (pricing + teacher pages) ──────
  'billing.affiliate.heading': {
    en: 'Have an access code?',
    ar: 'عندك كود دخول؟',
    es: '¿Tienes un código de acceso?',
  },
  'billing.affiliate.subheading_intro': {
    en: 'Enter a partner or teacher code to unlock your discounted annual rate.',
    ar: 'دخّل كود شريك أو معلم تفتح سعرك السنوي المخفّض.',
    es: 'Introduce un código de socio o profesor para desbloquear tu tarifa anual con descuento.',
  },
  'billing.affiliate.prompt_heading': {
    en: 'Got a code from a teacher or partner?',
    ar: 'وصلك كود من معلم أو شريك؟',
    es: '¿Tienes un código de un profesor o socio?',
  },
  'billing.affiliate.apply_code': { en: 'Apply code', ar: 'طبّق الكود', es: 'Aplicar código' },
  'billing.affiliate.apply_short': { en: 'Apply', ar: 'طبّق', es: 'Aplicar' },
  'billing.affiliate.aria_apply': {
    en: 'Apply discount code',
    ar: 'طبّق كود الخصم',
    es: 'Aplicar código de descuento',
  },
  'billing.affiliate.checking': { en: 'Checking…', ar: 'نتأكّد…', es: 'Comprobando…' },
  'billing.affiliate.eg_prefix': { en: 'e.g.', ar: 'مثلاً', es: 'p. ej.' },
  'billing.affiliate.placeholder_compact': {
    en: 'Enter code',
    ar: 'دخّل الكود',
    es: 'Introduce el código',
  },
  'billing.affiliate.error.empty': {
    en: 'Enter a code first.',
    ar: 'دخّل كود الأول.',
    es: 'Introduce primero un código.',
  },
  'billing.affiliate.error.invalid': {
    en: "That code isn't valid or has expired.",
    ar: 'الكود مو صحيح أو منتهي.',
    es: 'Ese código no es válido o ha caducado.',
  },
  'billing.affiliate.error.network': {
    en: "Couldn't check that code just now - please try again.",
    ar: 'ما قدرنا نتأكّد من الكود الحين، حاول مرة ثانية.',
    es: 'No se pudo comprobar ese código ahora mismo; inténtalo de nuevo.',
  },
  'billing.affiliate.applied_prefix': {
    en: 'Code applied:',
    ar: 'الكود اتطبّق:',
    es: 'Código aplicado:',
  },
  'billing.affiliate.applied_suffix': {
    en: '- your discount is locked in.',
    ar: '، خصمك صار مثبّت.',
    es: '- tu descuento queda fijado.',
  },
  'billing.affiliate.remove': { en: 'Remove', ar: 'شيل', es: 'Quitar' },
  'billing.affiliate.saves_prefix': { en: 'Saves you', ar: 'يوفّر لك', es: 'Te ahorra' },
  'billing.affiliate.instead_of': { en: 'instead of', ar: 'بدال', es: 'en lugar de' },
  'billing.affiliate.or': { en: 'or', ar: 'أو', es: 'o' },
  'billing.affiliate.per_year_short': { en: '/yr', ar: '/سنة', es: '/año' },
  'billing.affiliate.label_student': {
    en: 'Student plan',
    ar: 'باقة الطالب',
    es: 'Plan de estudiante',
  },
  'billing.affiliate.label_student_annual': {
    en: 'Student annual',
    ar: 'باقة الطالب السنوية',
    es: 'Estudiante anual',
  },
  'billing.affiliate.label_teacher': {
    en: 'Teacher plan',
    ar: 'باقة المعلم',
    es: 'Plan de profesor',
  },
  'billing.affiliate.label_teacher_annual': {
    en: 'Teacher annual',
    ar: 'باقة المعلم السنوية',
    es: 'Profesor anual',
  },
  'billing.affiliate.no_monthly_discount': {
    en: 'Codes apply to annual plans only.',
    ar: 'الأكواد تنطبق على الباقات السنوية بس.',
    es: 'Los códigos solo se aplican a los planes anuales.',
  },
  'billing.affiliate.compact_blurb_saves': { en: 'Save', ar: 'وفّر', es: 'Ahorra' },
  'billing.affiliate.compact_blurb_on_annual': {
    en: 'on the annual plan',
    ar: 'على الباقة السنوية',
    es: 'en el plan anual',
  },
  'billing.affiliate.subheading_on_student_annual': {
    en: 'Applied to your Student annual plan.',
    ar: 'اتطبّق على باقة الطالب السنوية حقّتك.',
    es: 'Aplicado a tu plan de estudiante anual.',
  },
  'billing.affiliate.subheading_on_teacher_annual': {
    en: 'Applied to your Teacher annual plan.',
    ar: 'اتطبّق على باقة المعلم السنوية حقّتك.',
    es: 'Aplicado a tu plan de profesor anual.',
  },
  'billing.affiliate.subheading_save_prefix': { en: 'You save', ar: 'إنت توفّر', es: 'Ahorras' },
  // Was MISSING entirely - rendered as [[billing.affiliate.on_annual_label]]
  'billing.affiliate.on_annual_label': { en: 'on annual', ar: 'على السنوية', es: 'en el anual' },

  // ── Trial countdown banner ───────────────────────────────────────
  'billing.trial.cta_upgrade_now': { en: 'Upgrade now', ar: 'رقّي الحين', es: 'Mejorar ahora' },
  'billing.trial.left_suffix': { en: 'left', ar: 'باقي', es: 'restantes' },
  'billing.trial.subline_default': {
    en: "You're on a free trial - upgrade any time to keep full access.",
    ar: 'إنت على تجربة مجانية، رقّي أي وقت تحتفظ بالوصول الكامل.',
    es: 'Estás en una prueba gratuita: mejora cuando quieras para mantener el acceso completo.',
  },
  'billing.trial.subline_last_day': {
    en: 'Last day of your free trial - upgrade now to avoid losing access.',
    ar: 'آخر يوم في تجربتك المجانية، رقّي الحين عشان ما تفقد الوصول.',
    es: 'Último día de tu prueba gratuita: mejora ahora para no perder el acceso.',
  },
  'billing.trial.unit_day': { en: 'day', ar: 'يوم', es: 'día' },
  'billing.trial.unit_days': { en: 'days', ar: 'أيام', es: 'días' },
  'billing.trial.unit_h': { en: 'h', ar: 'س', es: 'h' },
  'billing.trial.unit_m': { en: 'm', ar: 'د', es: 'm' },
}
