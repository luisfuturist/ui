import * as React from 'react'

import { cn } from '../lib/utils'

export interface ErrorPageProps
  extends Omit<React.ComponentProps<'section'>, 'title'> {
  code: React.ReactNode
  heading?: React.ReactNode
  lines?: React.ReactNode[]
  action?: React.ReactNode
}

export function ErrorPage({
  code = '404',
  heading,
  lines = ['The requested resource could not be found.', 'It may have been moved, deleted, or never existed.'],
  action,
  className,
  ...props
}: ErrorPageProps) {
  return (
    <section
      data-slot="error-page"
      className={cn(
        'flex min-h-[60vh] w-full flex-col items-center justify-center py-24',
        className,
      )}
      {...props}
    >
      <div className="z-10 mt-12 mb-48 w-full text-center lg:mt-0">
        <h1 className="font-flex text-9xl font-bold text-foreground">
          {code}
          {heading && (
            <span className="font-sans text-4xl font-normal">
              {'<'}
              {heading}
              {'>'}
            </span>
          )}
        </h1>
      </div>

      <div className="mb-48 w-full space-y-8">
        <p className="text-4xl leading-relaxed font-sans text-foreground">
          {lines.map((line, i) => (
            <React.Fragment key={i}>
              {i > 0 && <br />}
              {line}
            </React.Fragment>
          ))}
        </p>
      </div>

      {action && (
        <div className="flex w-full flex-col gap-6">{action}</div>
      )}
    </section>
  )
}
