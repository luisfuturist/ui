import type { VariantProps } from 'class-variance-authority'
import * as React from 'react'
import MaterialAdd from '~icons/material-symbols/add'
import MaterialError from '~icons/material-symbols/error'
import MaterialInbox from '~icons/material-symbols/inbox'
import MaterialRefresh from '~icons/material-symbols/refresh'
import MaterialSearchOff from '~icons/material-symbols/search-off'

import { Button } from '../components/ui/button'
import type { buttonVariants } from '../components/ui/button-variants'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '../components/ui/empty'
import { cn } from '../lib/utils'

export interface EmptyStateProps
  extends Omit<React.ComponentProps<'div'>, 'title'> {
  icon?: React.ReactNode
  title?: React.ReactNode
  description?: React.ReactNode
  actionLabel?: React.ReactNode
  actionIcon?: React.ReactNode
  onAction?: () => void
}

interface EmptyStatePresetProps extends EmptyStateProps {
  actionVariant?: VariantProps<typeof buttonVariants>['variant']
}

function EmptyStatePreset({
  icon,
  title,
  description,
  actionLabel,
  actionIcon,
  actionVariant = 'outline',
  onAction,
  className,
  ...props
}: EmptyStatePresetProps) {
  return (
    <Empty className={cn('border', className)} {...props}>
      <EmptyHeader>
        {icon && (
          <EmptyMedia variant="icon">
            {icon}
          </EmptyMedia>
        )}
        {title && (
          <EmptyTitle>{title}</EmptyTitle>
        )}
        {description && (
          <EmptyDescription>{description}</EmptyDescription>
        )}
      </EmptyHeader>
      {actionLabel && (
        <EmptyContent>
          <Button variant={actionVariant} size="sm" onClick={onAction}>
            {actionIcon}
            {actionLabel}
          </Button>
        </EmptyContent>
      )}
    </Empty>
  )
}

export function EmptySearch({
  icon = <MaterialSearchOff />,
  title = 'No results found',
  description = 'Try adjusting your search terms or filters.',
  actionLabel = 'Clear search',
  ...props
}: EmptyStateProps) {
  return (
    <EmptyStatePreset
      data-slot="empty-search"
      icon={icon}
      title={title}
      description={description}
      actionLabel={actionLabel}
      actionVariant="outline"
      {...props}
    />
  )
}

export function EmptyData({
  icon = <MaterialInbox />,
  title = 'Nothing here yet',
  description = 'Get started by creating your first item.',
  actionLabel = 'Create item',
  actionIcon = <MaterialAdd />,
  ...props
}: EmptyStateProps) {
  return (
    <EmptyStatePreset
      data-slot="empty-data"
      icon={icon}
      title={title}
      description={description}
      actionLabel={actionLabel}
      actionIcon={actionIcon}
      actionVariant="default"
      {...props}
    />
  )
}

export function EmptyError({
  icon = <MaterialError />,
  title = 'Something went wrong',
  description = 'An unexpected error occurred. Please try again.',
  actionLabel = 'Try again',
  actionIcon = <MaterialRefresh />,
  ...props
}: EmptyStateProps) {
  return (
    <EmptyStatePreset
      data-slot="empty-error"
      icon={icon}
      title={title}
      description={description}
      actionLabel={actionLabel}
      actionIcon={actionIcon}
      actionVariant="outline"
      {...props}
    />
  )
}
