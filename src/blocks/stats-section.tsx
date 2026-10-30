import * as React from 'react'
import MaterialTrendingDown from '~icons/material-symbols/trending-down'
import MaterialTrendingFlat from '~icons/material-symbols/trending-flat'
import MaterialTrendingUp from '~icons/material-symbols/trending-up'

import { cn } from '../lib/utils'

export interface StatsSectionStat {
  value: React.ReactNode
  label: React.ReactNode
  delta?: React.ReactNode
  trend?: 'up' | 'down' | 'neutral'
}

export interface StatsSectionProps
  extends Omit<React.ComponentProps<'section'>, 'title'> {
  title?: React.ReactNode
  eyebrow?: React.ReactNode
  stats: StatsSectionStat[]
}

const trendIcons = {
  up: <MaterialTrendingUp className="size-4" />,
  down: <MaterialTrendingDown className="size-4" />,
  neutral: <MaterialTrendingFlat className="size-4" />,
} as const

const trendColors = {
  up: 'text-green',
  down: 'text-red',
  neutral: 'text-muted-foreground',
} as const

export function StatsSection({
  title,
  eyebrow,
  stats,
  className,
  ...props
}: StatsSectionProps) {
  return (
    <section
      data-slot="stats-section"
      className={cn('w-full px-6 py-16 sm:py-20', className)}
      {...props}
    >
      <div className="mx-auto w-full max-w-5xl">
        {(eyebrow || title) && (
          <div className="mb-8 flex flex-col gap-2">
            {eyebrow && (
              <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-display text-3xl font-medium text-balance sm:text-4xl">
                {title}
              </h2>
            )}
          </div>
        )}

        <dl
          data-slot="stats-section-grid"
          className="grid divide-y divide-foreground border border-foreground sm:grid-flow-col sm:auto-cols-fr sm:divide-x sm:divide-y-0"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              data-slot="stats-section-cell"
              className="flex flex-col gap-2 px-6 py-8"
            >
              <dt className="flex items-baseline gap-2 font-mono text-xs tracking-widest text-muted-foreground uppercase">
                <span className="text-accent" aria-hidden>
                  {'>'}
                </span>
                {stat.label}
              </dt>
              <dd className="font-display text-4xl font-medium sm:text-5xl">
                {stat.value}
              </dd>
              {stat.delta && (
                <dd
                  className={cn(
                    'flex items-center gap-1 font-mono text-xs',
                    trendColors[stat.trend ?? 'neutral'],
                  )}
                >
                  {trendIcons[stat.trend ?? 'neutral']}
                  {stat.delta}
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
