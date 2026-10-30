import * as React from 'react'
import MaterialSettingsSharp from '~icons/material-symbols/settings-sharp'

import { Button } from '../components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../components/ui/dropdown-menu'
import { ThemeToggleMenuItems, type ThemeToggleLabels } from './theme-toggle'
import { cn } from '../lib/utils'

export interface SettingsMenuLabels extends ThemeToggleLabels {
  settings?: string
}

export interface SettingsMenuProps {
  labels?: SettingsMenuLabels
  /** Render the theme radio group (separator included). Default: true. */
  showTheme?: boolean
  /** Extra menu content appended after the theme group, e.g. language items. */
  children?: React.ReactNode
  /** Override the trigger — default is an augmented settings icon button. */
  trigger?: React.ReactNode
  align?: 'start' | 'center' | 'end'
  sideOffset?: number
  className?: string
  contentClassName?: string
  iconClassName?: string
}

/**
 * Settings dropdown — augmented gear trigger opening a menu with the
 * `ThemeToggleMenuItems` radio group plus whatever extra sections the
 * consumer slots in (language pickers, etc.). The pattern the website
 * composes by hand, packaged for reuse.
 */
export function SettingsMenu({
  labels,
  showTheme = true,
  children,
  trigger,
  align = 'end',
  sideOffset = 8,
  className,
  contentClassName,
  iconClassName,
}: SettingsMenuProps) {
  const l = { settings: 'Settings', ...labels }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {trigger ?? (
          <Button
            data-slot="settings-menu-trigger"
            variant="augmented"
            size="icon-xl"
            className={cn(className)}
            aria-label={l.settings}
            title={l.settings}
          >
            <MaterialSettingsSharp className="size-6" />
          </Button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className={cn('w-56', contentClassName)}
        align={align}
        sideOffset={sideOffset}
      >
        <DropdownMenuLabel>{l.settings}</DropdownMenuLabel>
        {showTheme && (
          <>
            <DropdownMenuSeparator />
            <ThemeToggleMenuItems labels={labels} iconClassName={iconClassName} />
          </>
        )}
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
