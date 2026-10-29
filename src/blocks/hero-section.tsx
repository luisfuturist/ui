import * as React from 'react'

import { cn } from '../lib/utils'

export interface HeroSectionProps
  extends Omit<React.ComponentProps<'section'>, 'title'> {
  eyebrow?: React.ReactNode
  title: React.ReactNode
  description?: React.ReactNode
  actions?: React.ReactNode
}

export function HeroSection({
  eyebrow,
  title,
  description,
  actions,
  className,
  ...props
}: HeroSectionProps) {
  return (
    <section
      data-slot="hero-section"
      className={cn(
        'flex w-full flex-col items-center gap-6 px-6 py-20 text-center sm:py-28',
        className,
      )}
      {...props}
    >
      {eyebrow && (
        <p className="font-mono text-sm tracking-widest text-muted-foreground uppercase">
          {eyebrow}
        </p>
      )}
      <h1 className="max-w-3xl font-mono text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
        {title}
      </h1>
      {description && (
        <p className="max-w-xl text-lg text-balance text-muted-foreground">
          {description}
        </p>
      )}
      {actions && (
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          {actions}
        </div>
      )}
    </section>
  )
}
