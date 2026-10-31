import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../components/ui/dropdown-menu'
import { Button } from '../components/ui/button'
import MaterialSettingsSharp from '~icons/material-symbols/settings-sharp'
import { ThemeToggle, ThemeToggleMenuItems } from './theme-toggle'

const meta = {
  title: 'Blocks/ThemeToggle',
  component: ThemeToggle,
  parameters: {
    docs: {
      description: {
        component:
          'Class-based theme switching (`.dark` on `<html>`, persisted '
          + 'to a `theme` cookie shared across subdomains) built on `useTheme` — '
          + 'provider-free, so it works inside isolated React islands. '
          + '`ThemeToggle` is a single button cycling light → dark → '
          + 'system; `ThemeToggleMenuItems` is the same picker as a '
          + 'dropdown radio group for settings menus. Labels are '
          + 'overridable for i18n.',
      },
    },
  },
  argTypes: {
    cycle: { control: false },
    labels: { control: 'object' },
    iconClassName: { control: 'text' },
  },
} satisfies Meta<typeof ThemeToggle>

export default meta
type Story = StoryObj<typeof meta>

export const ButtonCycle: Story = {
  render: args => (
    <div className="flex items-center gap-2 p-8">
      <ThemeToggle {...args} />
      <span className="font-mono text-xs text-muted-foreground">
        light → dark → system
      </span>
    </div>
  ),
}

export const AugmentedIconButton: Story = {
  name: 'Augmented icon button',
  render: args => (
    <div className="flex items-center gap-2 p-8">
      <ThemeToggle {...args} variant="augmented" size="icon-xl" />
    </div>
  ),
}

export const MenuItems: Story = {
  render: () => (
    <div className="flex justify-center p-8">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="augmented" size="icon-xl">
            <MaterialSettingsSharp className="size-6" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end">
          <ThemeToggleMenuItems />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'The radio-group form for composition inside a settings '
          + 'dropdown — the pattern the website uses in its '
          + '`SettingsMenu`.',
      },
    },
  },
}
