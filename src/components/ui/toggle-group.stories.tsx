import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Italic,
  Underline,
} from 'lucide-react'

import { ToggleGroup, ToggleGroupItem } from './toggle-group'

const meta = {
  title: 'Components/ToggleGroup',
  component: ToggleGroup,
  parameters: {
    docs: {
      description: {
        component:
          'A row of related toggles built on `radix-ui`\'s `ToggleGroup`. '
          + '`type="single"` allows one active item, `type="multiple"` '
          + 'allows several. `variant`/`size` propagate to items through '
          + 'context, and `spacing` controls the gap — `0` (default) '
          + 'fuses items into one segmented control.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'radio',
      options: ['single', 'multiple'],
      description: 'Selection mode — one item or many.',
    },
    variant: {
      control: 'radio',
      options: ['default', 'outline'],
      description: 'Visual variant applied to every item.',
    },
    size: {
      control: 'radio',
      options: ['sm', 'default', 'lg'],
      description: 'Size applied to every item.',
    },
    spacing: {
      control: 'number',
      description: 'Gap between items in `--spacing` units; `0` fuses them.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables every item in the group.',
    },
    defaultValue: {
      control: false,
      description: 'Initially pressed item `value`(s).',
    },
    onValueChange: {
      control: false,
      description: 'Called with the new value(s) on change.',
    },
    className: {
      control: false,
    },
    children: {
      control: false,
    },
  },
  args: {
    type: 'single',
    variant: 'default',
    size: 'default',
    spacing: 0,
    disabled: false,
  },
} satisfies Meta<typeof ToggleGroup>

export default meta
type Story = StoryObj<typeof meta>

const alignItems = (
  <>
    <ToggleGroupItem value="left" aria-label="Align left">
      <AlignLeft />
    </ToggleGroupItem>
    <ToggleGroupItem value="center" aria-label="Align center">
      <AlignCenter />
    </ToggleGroupItem>
    <ToggleGroupItem value="right" aria-label="Align right">
      <AlignRight />
    </ToggleGroupItem>
  </>
)

export const Playground: Story = {
  render: args => (
    <div className="flex items-center justify-center p-8">
      {args.type === 'multiple'
        ? (
            <ToggleGroup {...args} type="multiple" defaultValue={['center']}>
              {alignItems}
            </ToggleGroup>
          )
        : (
            <ToggleGroup {...args} type="single" defaultValue="center">
              {alignItems}
            </ToggleGroup>
          )}
    </div>
  ),
}

export const Single: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <ToggleGroup type="single" variant="outline" defaultValue="center">
        <ToggleGroupItem value="left" aria-label="Align left">
          <AlignLeft />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center">
          <AlignCenter />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Align right">
          <AlignRight />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  ),
}

export const Multiple: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <ToggleGroup type="multiple" variant="outline" defaultValue={['bold']}>
        <ToggleGroupItem value="bold" aria-label="Bold">
          <Bold />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Italic">
          <Italic />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Underline">
          <Underline />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '`type="multiple"` lets several items stay pressed at once, '
          + 'like a formatting toolbar.',
      },
    },
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-6 p-8">
      {(['sm', 'default', 'lg'] as const).map(size => (
        <ToggleGroup
          key={size}
          type="single"
          variant="outline"
          size={size}
          defaultValue="bold"
        >
          <ToggleGroupItem value="bold" aria-label="Bold">
            <Bold />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Italic">
            <Italic />
          </ToggleGroupItem>
        </ToggleGroup>
      ))}
    </div>
  ),
}

export const Spaced: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <ToggleGroup
        type="single"
        variant="outline"
        spacing={2}
        defaultValue="center"
      >
        <ToggleGroupItem value="left" aria-label="Align left">
          <AlignLeft />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center">
          <AlignCenter />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Align right">
          <AlignRight />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Any `spacing` above `0` restores per-item radii and borders '
          + 'with a real gap between them.',
      },
    },
  },
}

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-6 p-8">
      <ToggleGroup type="single" variant="outline" defaultValue="bold">
        <ToggleGroupItem value="bold" aria-label="Bold">
          <Bold />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Italic" disabled>
          <Italic />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Underline">
          <Underline />
        </ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup type="single" variant="outline" disabled>
        <ToggleGroupItem value="a" aria-label="Option A">
          A
        </ToggleGroupItem>
        <ToggleGroupItem value="b" aria-label="Option B">
          B
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Left: one disabled item. Right: `disabled` on the root '
          + 'disables the whole group.',
      },
    },
  },
}
