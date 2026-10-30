import * as React from 'react'

import { cn } from '../lib/utils'

export interface SkillGroup {
  title: string
  items: string[]
}

export interface SkillsListProps
  extends Omit<React.ComponentProps<'section'>, 'title'> {
  title?: React.ReactNode
  groups?: SkillGroup[]
}

export function SkillsList({
  title,
  groups = [],
  className,
  ...props
}: SkillsListProps) {
  return (
    <section
      data-slot="skills-list"
      className={cn(
        'grid w-full grid-cols-1 gap-12 lg:grid-cols-4',
        className,
      )}
      {...props}
    >
      {title && (
        <div className="col-span-1">
          <h2 className="font-mono text-xl leading-relaxed font-normal tracking-[0.2em] text-foreground uppercase">
            {title}
          </h2>
        </div>
      )}

      <div
        className={cn(
          'col-span-1 border-t border-foreground pt-8',
          title ? 'lg:col-span-3' : 'lg:col-span-4',
        )}
      >
        <div className="flex flex-col gap-10">
          {groups.map(group => (
            <div
              key={group.title}
              data-slot="skills-list-group"
              className="flex flex-col gap-4 sm:flex-row sm:gap-8"
            >
              <h3 className="w-40 shrink-0 font-mono text-sm tracking-widest text-muted-foreground uppercase">
                {group.title}
              </h3>
              <ul className="flex flex-wrap content-start gap-2">
                {group.items.map(item => (
                  <li key={item}>
                    <span className="inline-flex items-center border border-foreground px-2 py-0.5 font-mono text-xs whitespace-nowrap text-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
