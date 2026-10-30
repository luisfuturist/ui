import * as React from 'react'

import { ErrorPage, type ErrorPageProps } from './error-page'

const linkClassName =
  'w-fit font-mono text-sm text-foreground no-underline uppercase transition-opacity duration-300 hover:text-link-primary-hover'

export interface ErrorPagePresetProps
  extends Omit<ErrorPageProps, 'code' | 'heading'> {
  /** Defaults to the preset's status code — override for custom pages. */
  code?: React.ReactNode
  heading?: React.ReactNode
}

export function ErrorPage404({
  code = '404',
  heading = 'not found',
  lines = [
    'The page you are looking for could not be found.',
    'It may have been moved, deleted, or never existed.',
  ],
  action = (
    <a href="/" className={linkClassName}>
      [return home]
    </a>
  ),
  ...props
}: ErrorPagePresetProps) {
  return (
    <ErrorPage
      code={code}
      heading={heading}
      lines={lines}
      action={action}
      {...props}
    />
  )
}

export function ErrorPage500({
  code = '500',
  heading = 'server error',
  lines = [
    'Something went wrong on our end.',
    'Try again in a moment.',
  ],
  action = (
    <a href="/" className={linkClassName}>
      [return home]
    </a>
  ),
  ...props
}: ErrorPagePresetProps) {
  return (
    <ErrorPage
      code={code}
      heading={heading}
      lines={lines}
      action={action}
      {...props}
    />
  )
}

export function ErrorPageMaintenance({
  code = '503',
  heading = 'under maintenance',
  lines = [
    'We are performing scheduled maintenance.',
    'Please check back soon.',
  ],
  action = (
    <a href="." className={linkClassName}>
      [try again]
    </a>
  ),
  ...props
}: ErrorPagePresetProps) {
  return (
    <ErrorPage
      code={code}
      heading={heading}
      lines={lines}
      action={action}
      {...props}
    />
  )
}
