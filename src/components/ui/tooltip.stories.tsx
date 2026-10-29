import type { Meta, StoryObj } from '@storybook/react-vite'
import { InfoIcon } from 'lucide-react'

import { Button } from './button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './tooltip'

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component:
          'A hover hint, built on `radix-ui` `Tooltip`. '
          + '`TooltipProvider` sets `delayDuration` (default `0` here — '
          + 'instant); `TooltipContent` is portaled, takes `side`/'
          + '`sideOffset`, and renders an arrow. Triggers should be '
          + 'focusable elements.',
      },
    },
  },
  decorators: [
    Story => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8 pt-24">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
}

export const Sides: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-2 p-8 pt-24">
      {(['top', 'right', 'bottom', 'left'] as const).map(side => (
        <Tooltip key={side}>
          <TooltipTrigger asChild>
            <Button variant="outline" className="capitalize">{side}</Button>
          </TooltipTrigger>
          <TooltipContent side={side}>
            <p>
              Tooltip on the
              {side}
            </p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '`side` on `TooltipContent` picks the popover edge '
          + '(default `top`); the entry animation slides in from the '
          + 'opposite direction.',
      },
    },
  },
}

export const WithDelay: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8 pt-24">
      <TooltipProvider delayDuration={700}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Hover patiently</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Delayed by 700ms</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Wrap in `TooltipProvider delayDuration={700}` (or per-'
          + 'tooltip `delayDuration`) — this module defaults it to `0` '
          + 'for instant tooltips.',
      },
    },
  },
}

export const IconTrigger: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8 pt-24">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" className="p-2">
            <InfoIcon />
            <span className="sr-only">Info</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Signal strength: nominal</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
}

export const DisabledButton: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8 pt-24">
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="inline-block cursor-not-allowed" tabIndex={0}>
            <Button
              disabled
              variant="outline" className="pointer-events-none"
            >
              Delete relay
            </Button>
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p>You need admin clearance</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Edge case: disabled buttons swallow pointer events — wrap '
          + 'the trigger in a `span` (with `pointer-events-none` on '
          + 'the button itself) so the tooltip still fires.',
      },
    },
  },
}
