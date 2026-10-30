import * as React from 'react'

import { cn } from '../lib/utils'

export interface FeatureGridFeature {
  icon?: React.ReactNode
  title: React.ReactNode
  description: React.ReactNode
}

export interface FeatureGridProps
  extends Omit<React.ComponentProps<'section'>, 'title'> {
  title: React.ReactNode
  eyebrow?: React.ReactNode
  description?: React.ReactNode
  features: FeatureGridFeature[]
  columns?: 2 | 3 | 4
}

const columnClasses = {
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
} as const

export function FeatureGrid({
  title,
  eyebrow,
  description,
  features,
  columns = 3,
  className,
  ...props
}: FeatureGridProps) {
  return (
    <section
      data-slot="feature-grid"
      className={cn('w-full px-6 py-16 sm:py-20', className)}
      {...props}
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="flex max-w-2xl flex-col gap-2">
          {eyebrow && (
            <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
              {eyebrow}
            </p>
          )}
          <h2 className="font-display text-3xl font-medium text-balance sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="text-balance text-muted-foreground">
              {description}
            </p>
          )}
        </div>

        <div
          data-slot="feature-grid-grid"
          className={cn(
            'mt-10 grid gap-px border border-foreground bg-foreground sm:grid-cols-2',
            columnClasses[columns],
          )}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              data-slot="feature-grid-cell"
              className="flex flex-col gap-3 bg-background p-6"
            >
              {feature.icon && (
                <div className="flex size-10 items-center justify-center bg-card text-card-foreground [&>svg]:size-5">
                  {feature.icon}
                </div>
              )}
              <h3 className="font-display text-lg font-medium">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
