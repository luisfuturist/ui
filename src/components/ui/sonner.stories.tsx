import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ToasterProps } from 'sonner'
import { toast } from 'sonner'

import { Button } from './button'
import { Toaster } from './sonner'

const meta = {
  title: 'Components/Toaster',
  component: Toaster,
  parameters: {
    docs: {
      description: {
        component:
          'Thin wrapper around [sonner](https://sonner.emilkowal.ski/)\'s '
          + '`Toaster` that reads `useTheme()` from `next-themes` and maps '
          + 'the toast surfaces to LFDS tokens (`--popover`, `--border`). '
          + 'There is no `next-themes` provider in Storybook, so each '
          + 'story passes the toolbar theme explicitly. Fire toasts with '
          + 'the `toast` export from `sonner`.',
      },
    },
  },
  argTypes: {
    position: {
      control: 'select',
      options: [
        'top-left',
        'top-center',
        'top-right',
        'bottom-left',
        'bottom-center',
        'bottom-right',
      ],
      description: 'Where the toast stack is anchored.',
    },
    theme: {
      control: false,
      description:
        'Driven by the Storybook theme toolbar in these stories.',
    },
    richColors: {
      control: 'boolean',
      description: 'Sonner\'s built-in success/error/warning colors.',
    },
  },
  args: {
    position: 'bottom-right',
  },
} satisfies Meta<typeof Toaster>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args, context) => (
    <div>
      <Toaster
        {...args}
        theme={context.globals.theme as ToasterProps['theme']}
      />
      <div className="flex max-w-md flex-wrap gap-2">
        <Button
          variant="outline"
          onClick={() => toast('Event has been created')}
        >
          Default
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.success('Expedition log saved', {
              description: 'Synced to the archive.',
            })}
        >
          Success
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.error('Transmission failed', {
              description: 'The relay did not respond in time.',
            })}
        >
          Error
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.info('New signal detected')}
        >
          Info
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.warning('Low power', {
              description: 'Switch to auxiliary systems soon.',
            })}
        >
          Warning
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.promise(
              new Promise(resolve => setTimeout(resolve, 2000)),
              {
                loading: 'Uploading coordinates…',
                success: 'Coordinates uploaded',
                error: 'Upload failed',
              },
            )}
        >
          Promise
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast('Scheduled maintenance tonight', {
              description: 'Systems will be unavailable 02:00–03:00.',
              action: {
                label: 'Dismiss',
                onClick: () => toast.info('Reminder dismissed'),
              },
            })}
        >
          Action + description
        </Button>
      </div>
    </div>
  ),
}

export const Positions: Story = {
  args: {
    position: 'top-center',
  },
  render: (args, context) => (
    <div>
      <Toaster
        {...args}
        theme={context.globals.theme as ToasterProps['theme']}
      />
      <div className="flex flex-col items-start gap-2">
        <p className="text-sm">
          Use the
          {' '}
          <strong>position</strong>
          {' '}
          control to move the toast stack, then fire a toast:
        </p>
        <Button
          variant="outline"
          onClick={() => toast(`Toast at ${args.position}`)}
        >
          Show toast
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'The `position` control exposes all six sonner anchor points: '
          + '`top-left`, `top-center`, `top-right`, `bottom-left`, '
          + '`bottom-center`, `bottom-right`.',
      },
    },
  },
}

export const EdgeCases: Story = {
  render: (args, context) => (
    <div>
      <Toaster
        {...args}
        theme={context.globals.theme as ToasterProps['theme']}
      />
      <div className="flex max-w-md flex-wrap gap-2">
        <Button
          variant="outline"
          onClick={() =>
            toast(
              'A very long toast message that stretches across the viewport to verify how the toaster wraps or truncates lengthy notification copy without a description attached',
            )}
        >
          Long message
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast('Stays until dismissed', {
              duration: Number.POSITIVE_INFINITY,
            })}
        >
          Infinite duration
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast('Heads up', {
              description:
                'A description long enough to span multiple lines inside the toast body, checking that the popover surface and border tokens hold up with denser content.',
              duration: 8000,
            })}
        >
          Long description
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Long messages, options-object calls, and multi-line '
          + 'descriptions.',
      },
    },
  },
}
