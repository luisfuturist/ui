import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import { Button } from '../components/ui/button'
import { CommandPalette } from './command-palette'
import { SearchBar } from './search-bar'
import { SiteHeader } from './site-header'

const meta = {
  title: 'Blocks/SiteHeader',
  component: SiteHeader,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A sticky page header with a `logo` slot, a `links` array '
          + 'rendered through `NavigationMenu` (entries with `children` '
          + 'become dropdown panels), and a right-side `actions` slot. '
          + 'The nav is hidden below the `lg` breakpoint — pair it with '
          + 'a mobile menu there.',
      },
    },
  },
  argTypes: {
    logo: { control: false },
    links: { control: false },
    actions: { control: false },
  },
} satisfies Meta<typeof SiteHeader>

export default meta
type Story = StoryObj<typeof meta>

const links = [
  { label: 'README', href: '#readme' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

const actions = (
  <>
    <Button variant="outline" size="sm">Log in</Button>
    <Button size="sm">
      Sign up
    </Button>
  </>
)

export const Default: Story = {
  args: {
    logo: <span className="font-mono text-sm font-semibold">luis@lfds:~$</span>,
    links,
    actions,
  },
}

export const WithDropdownLinks: Story = {
  args: {
    logo: <span className="font-mono text-sm font-semibold">luis@lfds:~$</span>,
    links: [
      { label: 'README', href: '#readme' },
      {
        label: 'Components',
        href: '#components',
        children: [
          {
            label: 'Forms',
            href: '#forms',
            description: 'Inputs, fields and validation.',
          },
          {
            label: 'Overlays',
            href: '#overlays',
            description: 'Dialogs, drawers and popovers.',
          },
          {
            label: 'Data display',
            href: '#data',
            description: 'Tables, charts and badges.',
          },
        ],
      },
      { label: 'Contact', href: '#contact' },
    ],
    actions,
  },
  parameters: {
    docs: {
      description: {
        story:
          'A link with `children` renders a `NavigationMenuTrigger` + '
          + '`NavigationMenuContent` dropdown listing each child\'s '
          + '`label`, `href` and optional `description`.',
      },
    },
  },
}

export const NarrowViewport: Story = {
  render: args => (
    <div className="mx-auto max-w-md">
      <SiteHeader {...args} />
    </div>
  ),
  args: {
    logo: <span className="font-mono text-sm font-semibold">luis@lfds:~$</span>,
    links,
    actions,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Rendered inside a narrow container: the `NavigationMenu` is '
          + '`hidden lg:flex`, so below the `lg` breakpoint only the logo '
          + 'and `actions` remain — the intended slot for a mobile menu '
          + 'trigger.',
      },
    },
  },
}

export const Minimal: Story = {
  args: {
    links: [],
    actions: undefined,
  },
  parameters: {
    docs: {
      description: {
        story:
          'With no `links` or `actions` the header collapses to a '
          + 'logo bar — both slots are optional.',
      },
    },
  },
}

export const ManyLinks: Story = {
  args: {
    logo: <span className="font-mono text-sm font-semibold">luis@lfds:~$</span>,
    links: [
      { label: 'README', href: '#' },
      { label: 'Projects', href: '#' },
      { label: 'Components', href: '#' },
      { label: 'Design Tokens', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Gallery', href: '#' },
      { label: 'Contact', href: '#' },
    ],
    actions,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Edge case — seven nav entries (including a two-word '
          + 'label) sharing the row with the actions slot. '
          + '`justify-between` keeps logo, nav and actions apart.',
      },
    },
  },
}

export const WithSearchPalette: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false)

    return (
      <>
        <SiteHeader
          logo={<span className="font-mono text-sm font-semibold">luis@lfds:~$</span>}
          links={links}
          actions={(
            <>
              <SearchBar
                className="w-44"
                placeholder="Search…"
                onOpen={() => setOpen(true)}
              />
              <Button size="sm">Sign up</Button>
            </>
          )}
        />
        <CommandPalette
          open={open}
          onOpenChange={setOpen}
          groups={[
            {
              label: 'Pages',
              items: [
                { label: 'README' },
                { label: 'Projects' },
                { label: 'Blog' },
                { label: 'Contact' },
              ],
            },
          ]}
        />
      </>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Composed chrome — a `SearchBar` trigger inside the '
          + '`actions` slot wired to a `CommandPalette`, the standard '
          + 'site-search setup.',
      },
    },
  },
}
