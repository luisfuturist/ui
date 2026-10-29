import * as React from 'react'
import MaterialArrowOutward from '~icons/material-symbols/arrow-outward'

import { cn } from '../lib/utils'

export interface ContactCTAProps
  extends Omit<React.ComponentProps<'a'>, 'title'> {
  title?: React.ReactNode
  actionLabel?: React.ReactNode
  icon?: React.ReactNode
}

export function ContactCTA({
  title = <>Connect with me now—Let&rsquo;s UDP or TCP.</>,
  actionLabel = 'Contact Me',
  icon = <MaterialArrowOutward className="size-6 flex-shrink-0 text-background" />,
  className,
  ...props
}: ContactCTAProps) {
  return (
    <a
      data-slot="contact-cta"
      data-augmented-ui="bl-rect br-clip-y both"
      className={cn(
        'aug-contact-cta group relative mb-32 flex min-h-[calc(100vh-12rem)] flex-wrap items-center justify-between gap-8 bg-foreground px-12 py-12 md:px-24 lg:min-h-0 lg:flex-row lg:justify-center lg:p-20 lg:pl-24',
        className,
      )}
      {...props}
    >
      <h2 className="w-full pt-16 font-display text-6xl font-medium text-background lg:max-w-xl lg:pt-0">
        {title}
      </h2>

      <div
        data-augmented-ui="tr-clip bl-clip both"
        className="aug-button flex max-w-lg cursor-pointer items-center justify-between gap-8 bg-background pl-8 text-lg group-focus:[--aug-border-bg:var(--accent)_!important]"
      >
        {actionLabel}
        <div
          data-augmented-ui="tr-clip bl-clip both"
          className="aug-button-div p-4"
        >
          {icon}
        </div>
      </div>
    </a>
  )
}
