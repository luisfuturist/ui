import type { Meta, StoryObj } from '@storybook/react-vite'
import { useEffect, useState } from 'react'
import MaterialCalculate from '~icons/material-symbols/calculate'
import MaterialCalendarToday from '~icons/material-symbols/calendar-today'
import MaterialCreditCard from '~icons/material-symbols/credit-card'
import MaterialMood from '~icons/material-symbols/mood'
import MaterialPerson from '~icons/material-symbols/person'
import MaterialSettings from '~icons/material-symbols/settings'

import { Button } from '../components/ui/button'
import {
  CommandPalette,
  type CommandPaletteGroup,
} from './command-palette'
import { SearchBar } from './search-bar'
import { SiteHeader } from './site-header'

const meta = {
  title: 'Blocks/CommandPalette',
  component: CommandPalette,
  parameters: {
    docs: {
      description: {
        component:
          'A ready-to-drop ⌘K palette composing `Dialog` + `Command` '
          + '(the same shell `CommandDialog` renders). Feed it `groups` '
          + '— each with a `label` and `items` (`label`, `icon`, '
          + '`shortcut`, `keywords`, `disabled`, `onSelect`) — and '
          + 'control visibility with `open`/`onOpenChange` '
          + '(or `defaultOpen`). `placeholder` and `emptyText` '
          + 'configure the input and empty state.',
      },
    },
  },
} satisfies Meta<typeof CommandPalette>

export default meta
type Story = StoryObj<typeof meta>

const basicGroups: CommandPaletteGroup[] = [
  {
    label: 'Suggestions',
    items: [
      { label: 'Calendar' },
      { label: 'Search Emoji' },
      { label: 'Calculator', disabled: true },
    ],
  },
]

export const Default: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false)

    return (
      <div className="flex items-center justify-center p-8">
        <Button variant="outline" onClick={() => setOpen(true)}>
          Open command palette
        </Button>
        <CommandPalette
          open={open}
          onOpenChange={setOpen}
          groups={basicGroups}
        />
      </div>
    )
  },
}

const richGroups: CommandPaletteGroup[] = [
  {
    label: 'Suggestions',
    items: [
      {
        label: 'Calendar',
        icon: <MaterialCalendarToday />,
        onSelect: () => alert('Calendar'),
      },
      {
        label: 'Search Emoji',
        icon: <MaterialMood />,
        keywords: ['emoticon', 'smiley'],
        onSelect: () => alert('Search Emoji'),
      },
      {
        label: 'Calculator',
        icon: <MaterialCalculate />,
        disabled: true,
      },
    ],
  },
  {
    label: 'Settings',
    items: [
      {
        label: 'Profile',
        icon: <MaterialPerson />,
        shortcut: '⌘P',
        onSelect: () => alert('Profile'),
      },
      {
        label: 'Billing',
        icon: <MaterialCreditCard />,
        shortcut: '⌘B',
        onSelect: () => alert('Billing'),
      },
      {
        label: 'Settings',
        icon: <MaterialSettings />,
        shortcut: '⌘S',
        onSelect: () => alert('Settings'),
      },
    ],
  },
]

export const WithShortcutsAndIcons: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false)

    useEffect(() => {
      const onKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
          event.preventDefault()
          setOpen(value => !value)
        }
      }
      document.addEventListener('keydown', onKeyDown)
      return () => document.removeEventListener('keydown', onKeyDown)
    }, [])

    return (
      <div className="flex flex-col items-center justify-center gap-4 p-8">
        <p className="text-sm text-muted-foreground">
          Press
          {' '}
          <kbd className="rounded border px-1.5 py-0.5 text-xs">⌘K</kbd>
          {' '}
          or
        </p>
        <Button variant="outline" onClick={() => setOpen(true)}>
          Open command palette
        </Button>
        <CommandPalette
          open={open}
          onOpenChange={setOpen}
          groups={richGroups}
          placeholder="Type a command or search…"
        />
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Items carry `icon`, `shortcut` (rendered as a trailing '
          + '`Kbd` chip) and `onSelect`. Wire a ⌘K/`Ctrl+K` keydown '
          + 'listener to `onOpenChange` for the classic palette toggle.',
      },
    },
  },
}

export const EmptyState: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false)

    return (
      <div className="flex items-center justify-center p-8">
        <Button variant="outline" onClick={() => setOpen(true)}>
          Open empty palette
        </Button>
        <CommandPalette
          open={open}
          onOpenChange={setOpen}
          groups={[]}
          emptyText="No commands registered in this workspace."
        />
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Empty state — `groups={[]}` renders only the input and '
          + 'the `emptyText` `CommandEmpty` line.',
      },
    },
  },
}

const scrollGroups: CommandPaletteGroup[] = [
  {
    label: 'Every page',
    items: [
      'Home', 'Projects', 'Blog', 'README', 'Components', 'Blocks',
      'Design Tokens', 'Gallery', 'Contact', 'Settings', 'Profile',
      'Billing', 'Notifications', 'Security', 'API Keys', 'Webhooks',
    ].map(label => ({ label })),
  },
]

export const LongList: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false)

    return (
      <div className="flex items-center justify-center p-8">
        <Button variant="outline" onClick={() => setOpen(true)}>
          Open long palette
        </Button>
        <CommandPalette
          open={open}
          onOpenChange={setOpen}
          groups={scrollGroups}
        />
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Edge case — sixteen items in one group. `CommandList` '
          + 'caps its height and scrolls; filtering still narrows '
          + 'the set.',
      },
    },
  },
}

export const InSiteHeader: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false)

    return (
      <div className="flex flex-col">
        <SiteHeader
          links={[
            { label: 'Docs', href: '#' },
            { label: 'Blocks', href: '#' },
          ]}
          actions={(
            <SearchBar
              className="w-48"
              placeholder="Search…"
              onOpen={() => setOpen(true)}
            />
          )}
          className="static"
        />
        <CommandPalette
          open={open}
          onOpenChange={setOpen}
          groups={richGroups}
        />
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Composed chrome — a `SearchBar` trigger living in the '
          + '`SiteHeader` `actions` slot, opening the palette via '
          + '`onOpen`. The canonical wiring for a site-wide ⌘K.',
      },
    },
  },
}
