import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from './button'
import { Spinner } from './spinner'

const meta = {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    docs: {
      description: {
        component:
          'A `Loader2` icon with `animate-spin`, `role="status"` and '
          + '`aria-label="Loading"` baked in. It is a plain `svg` — '
          + 'size it with `size-*` and color it with `text-*` '
          + 'classes.',
      },
    },
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Sizing/color utilities, e.g. `size-6 text-primary`.',
    },
  },
  args: {
    className: '',
  },
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => (
    <div className="flex items-center justify-center p-8">
      <Spinner {...args} />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-4 p-8">
      <Spinner className="size-3" />
      <Spinner className="size-4" />
      <Spinner className="size-6" />
      <Spinner className="size-8" />
      <Spinner className="size-10" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'The default `size-4` plus smaller/larger overrides via '
          + '`className`.',
      },
    },
  },
}

export const Colors: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-4 p-8">
      <Spinner className="text-foreground" />
      <Spinner className="text-muted-foreground" />
      <Spinner className="text-primary" />
      <Spinner className="text-destructive" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'The icon inherits `currentColor`, so any `text-*` token '
          + 'recolors it.',
      },
    },
  },
}

export const WithText: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <p className="flex items-center gap-2 text-sm text-muted-foreground">
        <Spinner />
        Checking the northern pass…
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Inline status copy paired with the default size.',
      },
    },
  },
}

export const InButton: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-3 p-8">
      <Button
        disabled
        className="inline-flex items-center gap-2 border bg-primary px-4 py-2 text-sm text-primary-foreground"
      >
        <Spinner />
        Saving…
      </Button>
      <Button
        disabled
        className="inline-flex items-center gap-2 border px-4 py-2 text-sm"
      >
        <Spinner className="size-3" />
        Loading
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Loading state inside `Button`: disabled + spinner + label. '
          + '`Spinner` satisfies the button `[&_svg]:size-4` sizing '
          + 'rule automatically.',
      },
    },
  },
}
