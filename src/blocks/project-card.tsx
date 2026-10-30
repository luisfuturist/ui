import * as React from 'react'
import MaterialArrowOutward from '~icons/material-symbols/arrow-outward'

import { Badge } from '../components/ui/badge'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/ui/card'
import { cn } from '../lib/utils'

export interface ProjectCardLink {
  label: React.ReactNode
  href: string
}

export interface ProjectCardProps
  extends Omit<React.ComponentProps<'div'>, 'title'> {
  index?: number | string
  title: React.ReactNode
  description?: React.ReactNode
  tags?: string[]
  href?: string
  links?: ProjectCardLink[]
}

function formatIndex(index: number | string) {
  return typeof index === 'number'
    ? String(index).padStart(2, '0')
    : index
}

export function ProjectCard({
  index,
  title,
  description,
  tags = [],
  href,
  links = [],
  className,
  ...props
}: ProjectCardProps) {
  return (
    <Card
      data-slot="project-card"
      className={cn('group gap-0', className)}
      {...props}
    >
      <CardHeader className="gap-1">
        {index != null && (
          <span
            data-slot="project-card-index"
            className="font-mono text-sm text-muted-foreground"
          >
            {formatIndex(index)}
          </span>
        )}
        <CardTitle className="font-display text-3xl font-medium tracking-tight uppercase">
          {href
            ? (
                <a
                  href={href}
                  className="transition-colors duration-300 hover:text-link-primary-hover"
                >
                  {title}
                </a>
              )
            : title}
        </CardTitle>
        {href && (
          <CardAction>
            <MaterialArrowOutward className="size-5 text-muted-foreground transition-colors duration-300 group-hover:text-link-primary-hover" />
          </CardAction>
        )}
      </CardHeader>

      {(description || tags.length > 0) && (
        <CardContent className="flex flex-col gap-4">
          {description && (
            <CardDescription className="text-sm leading-relaxed">
              {description}
            </CardDescription>
          )}
          {tags.length > 0 && (
            <ul className="flex flex-wrap gap-2">
              {tags.map(tag => (
                <li key={tag}>
                  <Badge variant="outline" className="font-mono">
                    {tag}
                  </Badge>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      )}

      {links.length > 0 && (
        <CardFooter className="mt-auto flex-wrap gap-x-6 gap-y-2 pt-4">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex items-center gap-2 font-mono text-sm text-foreground uppercase transition-colors duration-300 hover:text-link-primary-hover"
            >
              <MaterialArrowOutward className="size-4" />
              <span className="flex items-center">
                <span aria-hidden="true" className="font-mono">
                  [
                </span>
                {link.label}
                <span aria-hidden="true" className="font-mono">
                  ]
                </span>
              </span>
            </a>
          ))}
        </CardFooter>
      )}
    </Card>
  )
}

export interface ProjectGridProps extends React.ComponentProps<'div'> {}

export function ProjectGrid({ className, ...props }: ProjectGridProps) {
  return (
    <div
      data-slot="project-grid"
      className={cn(
        'grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3',
        className,
      )}
      {...props}
    />
  )
}
