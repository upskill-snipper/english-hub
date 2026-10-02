import { mergeProps } from '@base-ui/react/merge-props'
import { useRender } from '@base-ui/react/use-render'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

/**
 * A badge is one line until it is wider than its container, then it wraps.
 *
 * It was a fixed-height, nowrap pill, which suits "AQA" and nothing longer.
 * On 2 October 2026 the phone-width check found 109 pages where a badge held
 * a board list ("Eduqas / AQA A-Level / Edexcel A-Level / OCR A-Level...",
 * 537px) or an exam skill ("GCSE-style two-part question: close reading
 * of...", 669px) and the card around it cut the words off on a phone. So the
 * height is a minimum (a short badge is the same 22px as before), the width
 * never exceeds the container, the text may wrap, and an icon keeps its size
 * beside wrapped text. A row of badges that should wrap as a row still needs
 * flex-wrap where it is used.
 */
const badgeVariants = cva(
  'group/badge inline-flex min-h-5.5 w-fit max-w-full shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-all duration-200 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/30 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3! [&>svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground [a]:hover:bg-primary/80',
        secondary: 'bg-secondary text-secondary-foreground [a]:hover:bg-secondary/70',
        destructive:
          'bg-destructive/10 text-destructive focus-visible:ring-destructive/20 [a]:hover:bg-destructive/20',
        outline:
          'border-border text-foreground [a]:hover:bg-accent [a]:hover:text-muted-foreground',
        ghost: 'hover:bg-accent hover:text-muted-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function Badge({
  className,
  variant = 'default',
  render,
  ...props
}: useRender.ComponentProps<'span'> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: 'span',
    props: mergeProps<'span'>(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props,
    ),
    render,
    state: {
      slot: 'badge',
      variant,
    },
  })
}

export { Badge, badgeVariants }
