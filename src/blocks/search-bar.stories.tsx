import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import MaterialFilterList from '~icons/material-symbols/filter-list'
import MaterialHome from '~icons/material-symbols/home'
import MaterialMail from '~icons/material-symbols/mail'
import MaterialSettings from '~icons/material-symbols/settings'

import { Button } from '../components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select'
import { CommandPalette } from './command-palette'
import { SearchBar } from './search-bar'

const meta = {
  title: 'Blocks/SearchBar',
  component: SearchBar,
  parameters: {
    docs: {
      description: {
        component:
          'An InputGroup-style field with a leading search icon and a '
          + 'trailing `Kbd` hint (`shortcut`, default `⌘K`). Two modes: '
          + 'pass `value`/`defaultValue`/`onValueChange` for a real '
          + 'input, or none of them for a button-like trigger whose '
          + '`onOpen` is the natural hook for a `CommandPalette`.',
      },
    },
  },
} satisfies Meta<typeof SearchBar>

export default meta
type Story = StoryObj<typeof meta>

export const Trigger: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false)

    return (
      <div className="flex items-center justify-center p-8">
        <SearchBar
          className="w-72"
          placeholder="Search pages…"
          onOpen={() => setOpen(true)}
        />
        <CommandPalette
          open={open}
          onOpenChange={setOpen}
          groups={[
            {
              label: 'Pages',
              items: [
                { label: 'Home', icon: <MaterialHome /> },
                { label: 'Contact', icon: <MaterialMail /> },
                { label: 'Settings', icon: <MaterialSettings /> },
              ],
            },
          ]}
        />
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'With no value props the block renders a `<button>` styled '
          + 'like the input — `onOpen` opens the palette.',
      },
    },
  },
}

export const Input: Story = {
  render: function Render() {
    const [value, setValue] = useState('')

    return (
      <div className="flex flex-col items-center justify-center gap-4 p-8">
        <SearchBar
          className="w-72"
          shortcut={null}
          value={value}
          onValueChange={setValue}
        />
        <p className="font-mono text-sm text-muted-foreground">
          {`value: ${value || '—'}`}
        </p>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'With `value`/`onValueChange` the block composes '
          + '`InputGroup` + `InputGroupInput` — a real input. '
          + '`shortcut={null}` hides the `Kbd` chip.',
      },
    },
  },
}

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col items-center justify-center gap-4 p-8">
      <SearchBar
        className="w-72"
        placeholder="Trigger mode, disabled"
        disabled
      />
      <SearchBar
        className="w-72"
        placeholder="Input mode, disabled"
        defaultValue="locked query"
        disabled
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Disabled state in both modes — the trigger button gets '
          + '`disabled:` cursor/opacity, the input mode forwards '
          + '`disabled` to `InputGroupInput`.',
      },
    },
  },
}

export const CustomIcon: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <SearchBar
        className="w-72"
        icon={<MaterialFilterList />}
        shortcut={null}
        placeholder="Filter results…"
        defaultValue=""
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '`icon` takes any node — here a `filter-list` glyph swaps '
          + 'the default `search` icon, and `shortcut={null}` drops '
          + 'the trailing `Kbd`.',
      },
    },
  },
}

export const FilterToolbar: Story = {
  render: function Render() {
    const [query, setQuery] = useState('')

    return (
      <div className="flex items-center justify-center p-8">
        <div className="flex w-full max-w-2xl flex-wrap items-center gap-2">
          <SearchBar
            className="min-w-48 flex-1"
            placeholder="Filter deployments…"
            value={query}
            onValueChange={setQuery}
            shortcut={null}
          />
          <Select defaultValue="all">
            <SelectTrigger className="w-36">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All statuses</SelectItem>
              <SelectItem value="live">Live</SelectItem>
              <SelectItem value="queued">Queued</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">Apply</Button>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Composed filter toolbar — input-mode `SearchBar` sharing a '
          + 'row with a `Select` and an apply `Button`, the standard '
          + 'list-page filter strip.',
      },
    },
  },
}
