import type { Meta, StoryObj } from '@storybook/react-vite'
import MaterialCheckCircle from '~icons/material-symbols/check-circle'
import MaterialStar from '~icons/material-symbols/star'

import { Badge } from './badge'

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    docs: {
      description: {
        component:
          'A compact status label with `cva` variants `default`, '
          + '`secondary`, `destructive`, `outline`, `ghost` and `link`. '
          + 'Accepts `asChild` to merge styles onto a child element '
          + '(e.g. an anchor) — `[a&]` selectors give anchors their '
          + 'hover styles.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'secondary',
        'destructive',
        'outline',
        'ghost',
        'link',
      ],
      description: 'Visual variant from the `cva` map.',
    },
    asChild: {
      control: 'boolean',
      description: 'Merge props onto the child element via `Slot`.',
    },
    children: {
      control: 'text',
      description: 'Badge content.',
    },
    className: {
      control: false,
    },
  },
  args: {
    variant: 'default',
    children: 'Badge',
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Variants: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-3 p-8">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="ghost">Ghost</Badge>
      <Badge variant="link">Link</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All six variants rendered side by side.',
      },
    },
  },
}

export const WithIcons: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-3 p-8">
      <Badge>
        <MaterialCheckCircle />
        Verified
      </Badge>
      <Badge variant="secondary">
        <MaterialStar />
        Featured
      </Badge>
      <Badge variant="outline">
        <MaterialCheckCircle />
        Passing
      </Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Leading `svg` children are sized automatically via '
          + '`[&>svg]:size-3`.',
      },
    },
  },
}

export const AsChild: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-3 p-8">
      <Badge asChild>
        <a href="https://github.com/luisfuturist" target="_blank" rel="noreferrer">
          Default as link
        </a>
      </Badge>
      <Badge variant="outline" asChild>
        <a href="#docs">Outline as link</a>
      </Badge>
      <Badge variant="link" asChild>
        <a href="#docs">Link variant</a>
      </Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '`asChild` swaps the rendered `span` for a Radix `Slot`, so '
          + 'the badge styles land on the anchor — including the '
          + '`[a&]:hover` styles baked into each variant.',
      },
    },
  },
}

export const LongLabel: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <div className="w-40">
        <Badge className="max-w-full">
          A status label that is far too long
        </Badge>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Edge case: `whitespace-nowrap` + `overflow-hidden` means a '
          + 'constrained badge truncates rather than wrapping.',
      },
    },
  },
}
