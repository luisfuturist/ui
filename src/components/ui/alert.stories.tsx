import type { Meta, StoryObj } from '@storybook/react-vite'
import MaterialError from '~icons/material-symbols/error'
import MaterialInfo from '~icons/material-symbols/info'
import MaterialTerminal from '~icons/material-symbols/terminal'

import { Alert, AlertDescription, AlertTitle } from './alert'

const meta = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    docs: {
      description: {
        component:
          'A callout for important messages. `Alert` is a plain `div` '
          + 'with `role="alert"` and a `cva` variant map (`default`, '
          + '`destructive`). When the first child is an `svg`, the grid '
          + 'switches to an icon + content layout automatically via '
          + '`has-[>svg]`.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['default', 'destructive'],
      description: 'Visual tone of the alert.',
    },
    className: {
      control: false,
    },
    children: {
      control: false,
    },
  },
  args: {
    variant: 'default',
  },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => (
    <div className="flex items-center justify-center p-8">
      <Alert className="w-96" {...args}>
        <MaterialTerminal />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your expedition using the CLI.
        </AlertDescription>
      </Alert>
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <div className="grid w-96 gap-4">
        <Alert>
          <MaterialInfo />
          <AlertTitle>New route available</AlertTitle>
          <AlertDescription>
            The northern pass has reopened for the season.
          </AlertDescription>
        </Alert>
        <Alert variant="destructive">
          <MaterialError />
          <AlertTitle>Expedition cancelled</AlertTitle>
          <AlertDescription>
            Storm warnings forced this departure to be cancelled. Your
            rations deposit was refunded.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'The two `cva` variants: `default` renders muted foreground '
          + 'copy, `destructive` recolors title, icon and description.',
      },
    },
  },
}

export const TitleOnly: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <Alert className="w-96">
        <AlertTitle>Your session expires in 10 minutes.</AlertTitle>
      </Alert>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Without an `svg` child the grid collapses to a single '
          + 'column — `AlertTitle` still lands in `col-start-2`.',
      },
    },
  },
}

export const DescriptionOnly: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <Alert className="w-96">
        <AlertDescription>
          Checkpoints along the route are marked with blue flags. Report
          any missing markers to the quartermaster.
        </AlertDescription>
      </Alert>
    </div>
  ),
}

export const LongTitle: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <Alert className="w-96">
        <MaterialInfo />
        <AlertTitle>
          A very long alert title that keeps going to verify the
          line-clamp-1 truncation applied by AlertTitle
        </AlertTitle>
        <AlertDescription>
          The description still wraps normally — only the title is
          clamped to a single line.
        </AlertDescription>
      </Alert>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Edge case: `AlertTitle` applies `line-clamp-1`, so long '
          + 'titles truncate with an ellipsis instead of wrapping.',
      },
    },
  },
}
