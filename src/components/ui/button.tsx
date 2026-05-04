'use client'

import * as React from 'react'
import { Button as ButtonPrimitive } from '@base-ui/react/button'

import { cn } from '@/lib/utils'
import { buttonVariants, type ButtonVariantsProps } from '@/components/ui/button-variants'

const Button = React.forwardRef<HTMLButtonElement, ButtonPrimitive.Props & ButtonVariantsProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <ButtonPrimitive
        ref={ref}
        data-slot="button"
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
