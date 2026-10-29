import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '../components/ui/button'
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
    <Button className="border px-3 py-1.5 text-sm">Log in</Button>
    <Button className="border bg-primary px-3 py-1.5 text-sm text-primary-foreground">
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
