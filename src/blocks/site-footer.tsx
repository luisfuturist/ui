import * as React from 'react'

import { cn } from '../lib/utils'

export interface SiteFooterLink {
  label: string
  href: string
}

export interface SiteFooterColumn {
  title: string
  links: SiteFooterLink[]
}

export interface SiteFooterSocial {
  label: string
  href: string
  icon?: React.ReactNode
}

export interface SiteFooterProps extends React.ComponentProps<'footer'> {
  columns?: SiteFooterColumn[]
  socials?: SiteFooterSocial[]
  copyright?: React.ReactNode
}

export function SiteFooter({
  columns = [],
  socials = [],
  copyright,
  className,
  ...props
}: SiteFooterProps) {
  return (
    <footer
      data-slot="site-footer"
      className={cn(
        'w-full border-t bg-background px-6 py-10 text-foreground',
        className,
      )}
      {...props}
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        {columns.length > 0 && (
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
            {columns.map(column => (
              <div key={column.title} className="flex flex-col gap-3">
                <h3 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  {column.title}
                </h3>
                <ul className="flex flex-col gap-2">
                  {column.links.map(link => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-foreground transition-colors hover:text-link-primary-hover"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-col items-center justify-between gap-4 border-t pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            {copyright ?? `© ${new Date().getFullYear()} — All rights reserved.`}
          </p>
          {socials.length > 0 && (
            <ul className="flex items-center gap-4">
              {socials.map(social => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-sm text-foreground transition-colors hover:text-link-primary-hover"
                  >
                    {social.icon}
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </footer>
  )
}
