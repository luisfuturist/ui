import * as React from 'react'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '../components/ui/navigation-menu'
import { cn } from '../lib/utils'

export interface SiteHeaderSubLink {
  label: string
  href: string
  description?: string
}

export interface SiteHeaderLink {
  label: string
  href: string
  children?: SiteHeaderSubLink[]
}

export interface SiteHeaderProps extends React.ComponentProps<'header'> {
  logo?: React.ReactNode
  links?: SiteHeaderLink[]
  actions?: React.ReactNode
}

export function SiteHeader({
  logo,
  links = [],
  actions,
  className,
  ...props
}: SiteHeaderProps) {
  return (
    <header
      data-slot="site-header"
      className={cn(
        'sticky top-0 z-50 flex w-full items-center justify-between gap-4 border-b bg-background px-6 py-3',
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        {logo ?? <span className="text-sm font-semibold">LFDS</span>}
      </div>

      {links.length > 0 && (
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {links.map(link => (
              <NavigationMenuItem key={link.label}>
                {link.children?.length
                  ? (
                      <>
                        <NavigationMenuTrigger>
                          {link.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-64 gap-1 p-2">
                            {link.children.map(child => (
                              <li key={child.label}>
                                <NavigationMenuLink href={child.href}>
                                  <div className="text-sm font-medium">
                                    {child.label}
                                  </div>
                                  {child.description && (
                                    <p className="text-sm text-muted-foreground">
                                      {child.description}
                                    </p>
                                  )}
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    )
                  : (
                      <NavigationMenuLink
                        href={link.href}
                        className={navigationMenuTriggerStyle()}
                      >
                        {link.label}
                      </NavigationMenuLink>
                    )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      )}

      {actions && (
        <div className="flex items-center gap-2">
          {actions}
        </div>
      )}
    </header>
  )
}
