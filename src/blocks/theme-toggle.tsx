import * as React from 'react'
import MaterialComputerSharp from '~icons/material-symbols/computer-sharp'
import MaterialDarkMode from '~icons/material-symbols/dark-mode'
import MaterialLightMode from '~icons/material-symbols/light-mode'

import type { VariantProps } from 'class-variance-authority'
import { Button } from '../components/ui/button'
import type { buttonVariants } from '../components/ui/button-variants'
import {
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from '../components/ui/dropdown-menu'
import { useTheme, type Theme } from '../hooks/use-theme'
import { cn } from '../lib/utils'

export interface ThemeToggleLabels {
  theme?: string
  light?: string
  dark?: string
  system?: string
  toggle?: string
}

const defaultLabels: Required<ThemeToggleLabels> = {
  theme: 'Theme',
  light: 'Light',
  dark: 'Dark',
  system: 'System',
  toggle: 'Toggle theme',
}

const icons: Record<Theme, React.ComponentType<{ className?: string }>> = {
  light: MaterialLightMode,
  dark: MaterialDarkMode,
  system: MaterialComputerSharp,
}

export interface ThemeToggleProps
  extends Omit<React.ComponentProps<'button'>, 'onClick' | 'children'>,
    VariantProps<typeof buttonVariants> {
  'asChild'?: boolean
  'data-augmented-ui'?: string
  /** Themes the button cycles through. Default: light → dark → system. */
  cycle?: Theme[]
  labels?: ThemeToggleLabels
  iconClassName?: string
}

/**
 * Single-button theme toggle — cycles through `cycle` themes on click and
 * shows an icon for the *selected* theme. Renders the `system` icon until
 * mounted to avoid SSR/hydration mismatches.
 */
export function ThemeToggle({
  cycle = ['light', 'dark', 'system'],
  labels,
  variant = 'ghost',
  size = 'icon',
  className,
  iconClassName,
  ...props
}: ThemeToggleProps) {
  const { theme, cycleTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])

  const l = { ...defaultLabels, ...labels }
  const shown: Theme = mounted ? theme : 'system'
  const Icon = icons[shown]

  return (
    <Button
      data-slot="theme-toggle"
      data-theme={shown}
      variant={variant}
      size={size}
      className={cn(className)}
      aria-label={l.toggle}
      title={l.toggle}
      onClick={() => cycleTheme(cycle)}
      {...props}
    >
      <Icon className={cn('size-5', iconClassName)} />
    </Button>
  )
}

export interface ThemeToggleMenuItemsProps {
  labels?: ThemeToggleLabels
  iconClassName?: string
}

/**
 * Theme picker for composition inside a `DropdownMenuContent` — a labelled
 * light/dark/system radio group (the pattern used by settings menus).
 */
export function ThemeToggleMenuItems({ labels, iconClassName }: ThemeToggleMenuItemsProps) {
  const { theme, setTheme } = useTheme()
  const l = { ...defaultLabels, ...labels }

  return (
    <>
      <DropdownMenuLabel>{l.theme}</DropdownMenuLabel>
      <DropdownMenuRadioGroup
        value={theme}
        onValueChange={value => setTheme(value as Theme)}
      >
        <DropdownMenuRadioItem value="system">
          <MaterialComputerSharp className={cn('size-6', iconClassName)} />
          {l.system}
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="light">
          <MaterialLightMode className={cn('size-6', iconClassName)} />
          {l.light}
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="dark">
          <MaterialDarkMode className={cn('size-6', iconClassName)} />
          {l.dark}
        </DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </>
  )
}
