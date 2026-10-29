import * as React from 'react'

import { cn } from '../lib/utils'

export interface ContactCTAProps
  extends Omit<React.ComponentProps<'section'>, 'title'> {
  title: React.ReactNode
  description?: React.ReactNode
  primaryAction: React.ReactNode
  secondaryAction?: React.ReactNode
}

export function ContactCTA({
  title,
  description,
  primaryAction,
  secondaryAction,
  className,
  ...props
}: ContactCTAProps) {
  return (
    <section
      data-slot="contact-cta"
      className={cn(
        'flex w-full flex-col items-center gap-6 rounded-xl border bg-card px-6 py-16 text-center text-card-foreground sm:py-20',
        className,
      )}
      {...props}
    >
      <h2 className="max-w-2xl font-mono text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-xl text-base text-balance text-muted-foreground">
          {description}
        </p>
      )}
      <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
        {primaryAction}
        {secondaryAction}
      </div>
    </section>
  )
}
