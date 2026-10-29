import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  CalculatorIcon,
  CalendarIcon,
  CreditCardIcon,
  SettingsIcon,
  SmileIcon,
  UserIcon,
} from 'lucide-react'
import { useEffect, useState } from 'react'

import { Button } from './button'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from './command'

const meta = {
  title: 'Components/Command',
  component: Command,
  parameters: {
    docs: {
      description: {
        component:
          'A [cmdk](https://cmdk.paco.me/) command palette: '
          + '`Command` + `CommandInput` + `CommandList` + `CommandItem`, '
          + 'with `CommandGroup`, `CommandSeparator`, `CommandShortcut` '
          + 'and `CommandEmpty` for structure. `CommandDialog` wraps the '
          + 'same list in a `Dialog` for a ⌘K overlay.',
      },
    },
  },
} satisfies Meta<typeof Command>

export default meta
type Story = StoryObj<typeof meta>

function CommandItems() {
  return (
    <>
      <CommandGroup heading="Suggestions">
        <CommandItem>
          <CalendarIcon />
          Calendar
        </CommandItem>
        <CommandItem>
          <SmileIcon />
          Search Emoji
        </CommandItem>
        <CommandItem disabled>
          <CalculatorIcon />
          Calculator
        </CommandItem>
      </CommandGroup>
      <CommandSeparator />
      <CommandGroup heading="Settings">
        <CommandItem>
          <UserIcon />
          Profile
          <CommandShortcut>⌘P</CommandShortcut>
        </CommandItem>
        <CommandItem>
          <CreditCardIcon />
          Billing
          <CommandShortcut>⌘B</CommandShortcut>
        </CommandItem>
        <CommandItem>
          <SettingsIcon />
          Settings
          <CommandShortcut>⌘S</CommandShortcut>
        </CommandItem>
      </CommandGroup>
    </>
  )
}

export const Default: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <Command className="w-full max-w-sm rounded-lg border shadow-md">
        <CommandInput placeholder="Type a command or search…" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandItems />
        </CommandList>
      </Command>
    </div>
  ),
}

export const InDialog: Story = {
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
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type a command or search…" />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandItems />
          </CommandList>
        </CommandDialog>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          '`CommandDialog` renders the palette inside a `Dialog` — '
          + 'wire your own ⌘K/`Ctrl+K` keydown listener to toggle it.',
      },
    },
  },
}

export const EmptyState: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <Command
        className="w-full max-w-sm rounded-lg border shadow-md"
        filter={() => 0}
      >
        <CommandInput placeholder="Try typing anything" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Settings</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Edge case: `CommandEmpty` renders whenever the filtered '
          + 'list has no items — forced here with a `filter` that '
          + 'scores everything `0` so the empty state is always '
          + 'visible.',
      },
    },
  },
}
