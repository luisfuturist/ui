import type { VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { buttonVariants } from './button-variants';
declare function Button({ className, variant, size, 'data-augmented-ui': dataAugmentedUi, asChild, ...props }: React.ComponentProps<'button'> & VariantProps<typeof buttonVariants> & {
    'asChild'?: boolean;
    'data-augmented-ui'?: string;
}): React.JSX.Element;
export { Button };
export { buttonVariants };
