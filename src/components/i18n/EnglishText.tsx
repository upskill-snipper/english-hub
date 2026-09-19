// ─── English content inside a page that is not in English ───────────────────
//
// A11Y-5. On /ar the root element is `<html lang="ar" dir="rtl">`, and the
// study content inside it is English by design: Macbeth, an AQA extract, a
// student's own essay. None of it carried a language mark, so:
//
//   A screen reader announces English words using Arabic pronunciation rules.
//   "Macbeth shall sleep no more" read with Arabic phonemes is not an accent,
//   it is unintelligible. This is the product's core content, and the Arabic
//   surface is the one where a blind student most needs it to work.
//
//   Bidirectional layout applies RTL rules to English prose, which moves
//   trailing punctuation to the wrong end of a line and reorders anything
//   containing digits or brackets - line references, act and scene numbers.
//
// WCAG 2.1 SC 3.1.2 (Language of Parts, AA) is explicit about this: the human
// language of each passage must be programmatically determinable.
//
// WHY A COMPONENT RATHER THAN AN ATTRIBUTE PER SITE. The attributes were being
// added by hand in eleven places already - the EAL pages, the poem viewer, the
// blog - each spelling out `dir="ltr" lang="en"` inline, and the largest
// English surface in the product, the set-text reader, had none. One component
// means one place to be right, and a grep that finds every site.
//
// IT IS NOT FOR EVERY ENGLISH STRING. Interface copy is translated; wrapping it
// would mark Arabic UI as English. This is for content that IS English in every
// locale because it is the thing being studied.

import type { ElementType, ReactNode } from 'react'

export function EnglishText({
  children,
  as: Tag = 'div',
  className,
  ...rest
}: {
  children: ReactNode
  /** The element to render. Defaults to a div; use 'span' inside a sentence. */
  as?: ElementType
  className?: string
} & Record<string, unknown>) {
  return (
    <Tag lang="en" dir="ltr" className={className} {...rest}>
      {children}
    </Tag>
  )
}
