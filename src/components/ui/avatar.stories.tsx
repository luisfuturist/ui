import type { Meta, StoryObj } from '@storybook/react-vite'
import MaterialCheck from '~icons/material-symbols/check'

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from './avatar'

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component:
          'A `radix-ui` `Avatar.Root` with `size="sm" | "default" | '
          + '"lg"` reflected onto `data-size`. `AvatarFallback` shows '
          + 'while `AvatarImage` loads or when no image is provided. '
          + '`AvatarBadge` anchors a status dot to the corner; '
          + '`AvatarGroup` + `AvatarGroupCount` render stacked '
          + 'overflow lists.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'default', 'lg'],
      description: 'Preset diameter — `size-6` / `size-8` / `size-10`.',
    },
    className: {
      control: false,
    },
    children: {
      control: false,
    },
  },
  args: {
    size: 'default',
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => (
    <div className="flex items-center justify-center p-8">
      <Avatar {...args}>
        <AvatarFallback>LF</AvatarFallback>
      </Avatar>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-4 p-8">
      <Avatar size="sm">
        <AvatarFallback>S</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>M</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback>L</AvatarFallback>
      </Avatar>
      <Avatar className="size-14">
        <AvatarFallback>XL</AvatarFallback>
      </Avatar>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'The three `size` presets plus a custom `size-14` via '
          + '`className` — `data-size` also feeds `AvatarBadge` and '
          + '`AvatarGroupCount` sizing.',
      },
    },
  },
}

export const BrokenImage: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <Avatar>
        <AvatarImage src="https://invalid.invalid/avatar.png" alt="LF" />
        <AvatarFallback>LF</AvatarFallback>
      </Avatar>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'When `AvatarImage` fails to load, `radix-ui` swaps to '
          + '`AvatarFallback` automatically — this story uses an '
          + 'unreachable URL so it works offline.',
      },
    },
  },
}

export const WithBadge: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-4 p-8">
      <Avatar>
        <AvatarFallback>ON</AvatarFallback>
        <AvatarBadge className="bg-green-600" />
      </Avatar>
      <Avatar>
        <AvatarFallback>OK</AvatarFallback>
        <AvatarBadge>
          <MaterialCheck />
        </AvatarBadge>
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback>BS</AvatarFallback>
        <AvatarBadge className="bg-yellow-500" />
      </Avatar>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '`AvatarBadge` renders a ringed status dot in the corner — '
          + 'empty for presence, or with an icon (hidden at `size="sm"`).',
      },
    },
  },
}

export const Group: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <AvatarGroup>
        <Avatar>
          <AvatarFallback>AL</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>BO</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>CY</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>+9</AvatarGroupCount>
      </AvatarGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '`AvatarGroup` overlaps children with `-space-x-2` and rings '
          + 'each avatar; `AvatarGroupCount` shows the overflow tally.',
      },
    },
  },
}
