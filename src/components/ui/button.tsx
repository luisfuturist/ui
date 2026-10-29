import type { VariantProps } from 'class-variance-authority'
import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'

import { cn } from '../../lib/utils'
import { buttonVariants } from './button-variants'

function Button({
  className,
  variant,
  size,
  'data-augmented-ui': dataAugmentedUi,
  asChild = false,
  ...props
}: React.ComponentProps<'button'>
  & VariantProps<typeof buttonVariants> & {
    'asChild'?: boolean
    'data-augmented-ui'?: string
  }) {
  const Comp = asChild ? Slot : 'button'

  // The `augmented*` variants ship the website's aug-button looks, which
  // only render once `data-augmented-ui` declares the clip pattern —
  // default it here (explicit prop still wins) so the variants work
  // without consumer markup.
  const resolvedAugmentedUi =
    dataAugmentedUi
    ?? (variant?.startsWith('augmented') ? 'tr-clip bl-clip both' : undefined)

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      data-augmented-ui={resolvedAugmentedUi}
      {...props}
    />
  )
}

export { Button }
// shadcn registry components (e.g. calendar, pagination) import buttonVariants
// from './button' — re-export so the module surface matches the registry contract.
export { buttonVariants }
