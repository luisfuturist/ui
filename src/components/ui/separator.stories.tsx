import type { Meta, StoryObj } from '@storybook/react-vite'

import { Separator } from './separator'

const meta = {
  title: 'Components/Separator',
  component: Separator,
  parameters: {
    docs: {
      description: {
        component:
          'A `radix-ui` `Separator` rendering a hairline `bg-border` '
          + 'rule. `orientation="horizontal" | "vertical"` and '
          + '`decorative` (default `true`, removing it from the '
          + 'accessibility tree). Vertical mode needs a sized parent '
          + '— it stretches to `h-full`.',
      },
    },
  },
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'Which axis the rule runs along.',
    },
    decorative: {
      control: 'boolean',
      description:
        'Marks the separator decorative (`role="none"`) instead of '
        + 'a real `separator` role.',
    },
    className: {
      control: false,
    },
  },
  args: {
    orientation: 'horizontal',
    decorative: true,
  },
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => (
    <div className="flex items-center justify-center p-8">
      <div className="flex h-8 w-96 items-center">
        <Separator {...args} />
      </div>
    </div>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <div className="w-80">
        <p className="text-sm font-medium">Northern pass</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Elevation 2,140 m — open May through October.
        </p>
        <Separator className="my-4" />
        <p className="text-sm font-medium">Southern rim</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Elevation 980 m — open year round.
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'The default orientation, splitting stacked content.',
      },
    },
  },
}

export const Vertical: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <div className="flex h-5 items-center gap-4 text-sm">
        <span>Routes</span>
        <Separator orientation="vertical" />
        <span>Checkpoints</span>
        <Separator orientation="vertical" />
        <span>Supplies</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '`orientation="vertical"` between inline labels — the '
          + 'wrapper needs an explicit height (`h-5`) for the '
          + '`h-full` rule to stretch.',
      },
    },
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <div className="flex w-80 items-center gap-4">
        <Separator className="flex-1" />
        <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Expedition log
        </span>
        <Separator className="flex-1" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'A decorative section divider: two `flex-1` separators '
          + 'flanking a label — a common auth-page “or continue with” '
          + 'pattern.',
      },
    },
  },
}
