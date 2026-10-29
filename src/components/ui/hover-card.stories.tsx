import type { Meta, StoryObj } from '@storybook/react-vite'
import { CalendarDaysIcon } from 'lucide-react'

import { Avatar, AvatarFallback } from './avatar'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from './hover-card'

const meta = {
  title: 'Components/HoverCard',
  component: HoverCard,
  parameters: {
    docs: {
      description: {
        component:
          'A preview card that appears on hover, built on `radix-ui` '
          + '`HoverCard`. `openDelay`/`closeDelay` tune the reveal; '
          + '`HoverCardContent` takes `align`/`sideOffset` and is '
          + 'portaled. Trigger is usually a link or a subtle button.',
      },
    },
  },
  argTypes: {
    openDelay: {
      control: 'number',
      description: 'Ms before the card opens on hover.',
    },
    closeDelay: {
      control: 'number',
      description: 'Ms before the card closes after leaving.',
    },
  },
  args: {
    openDelay: 700,
    closeDelay: 300,
  },
} satisfies Meta<typeof HoverCard>

export default meta
type Story = StoryObj<typeof meta>

function UserCard() {
  return (
    <div className="flex justify-between gap-4">
      <Avatar>
        <AvatarFallback>LF</AvatarFallback>
      </Avatar>
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">@luisfuturist</h4>
        <p className="text-sm">
          Building interfaces at the edge of the galaxy.
        </p>
        <div className="flex items-center pt-2">
          <CalendarDaysIcon className="mr-2 size-4 opacity-70" />
          {' '}
          <span className="text-xs text-muted-foreground">
            Joined December 2021
          </span>
        </div>
      </div>
    </div>
  )
}

export const Default: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8 pt-32">
      <HoverCard>
        <HoverCardTrigger asChild>
          <a href="#" className="text-sm font-medium underline underline-offset-4">
            @luisfuturist
          </a>
        </HoverCardTrigger>
        <HoverCardContent>
          <UserCard />
        </HoverCardContent>
      </HoverCard>
    </div>
  ),
}

export const Alignments: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-8 p-8 pt-32">
      {(['start', 'center', 'end'] as const).map(align => (
        <HoverCard key={align}>
          <HoverCardTrigger asChild>
            <a
              href="#"
              className="text-sm font-medium underline underline-offset-4 capitalize"
            >
              {align}
            </a>
          </HoverCardTrigger>
          <HoverCardContent align={align}>
            <p className="text-sm">
              Card aligned to the
              {' '}
              <strong>{align}</strong>
              {' '}
              of the trigger.
            </p>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '`align` on `HoverCardContent` pins the card to the '
          + '`start`, `center` or `end` of the trigger.',
      },
    },
  },
}

export const WithDelays: Story = {
  render: args => (
    <div className="flex items-center justify-center p-8 pt-32">
      <HoverCard openDelay={args.openDelay} closeDelay={args.closeDelay}>
        <HoverCardTrigger asChild>
          <a href="#" className="text-sm font-medium underline underline-offset-4">
            Hover me (with delay)
          </a>
        </HoverCardTrigger>
        <HoverCardContent>
          <UserCard />
        </HoverCardContent>
      </HoverCard>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Tune `openDelay`/`closeDelay` via the controls — defaults '
          + 'here mirror the radix defaults (700ms/300ms).',
      },
    },
  },
}
