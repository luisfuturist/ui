import type { Meta, StoryObj } from '@storybook/react-vite'
import { Bold, Italic, Star } from 'lucide-react'

import { Toggle } from './toggle'

const meta = {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    docs: {
      description: {
        component:
          'A two-state button built on `radix-ui`\'s `Toggle.Root`, '
          + 'styled by a real cva map — unlike `Button`, `variant` '
          + '(`"default"`/`"outline"`) and `size` (`"sm"`/`"default"`/'
          + '`"lg"`) apply visible styles. Pressed state is exposed as '
          + '`data-state="on"`.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['default', 'outline'],
      description: 'Visual variant.',
    },
    size: {
      control: 'radio',
      options: ['sm', 'default', 'lg'],
      description: 'Size of the toggle.',
    },
    defaultPressed: {
      control: 'boolean',
      description: 'Initial pressed state (uncontrolled).',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables interaction and applies `opacity-50`.',
    },
    pressed: {
      control: false,
      description: 'Controlled pressed state.',
    },
    onPressedChange: {
      control: false,
      description: 'Called with the new pressed state on toggle.',
    },
    children: {
      control: false,
      description: 'Toggle content — typically an icon.',
    },
    className: {
      control: false,
    },
  },
  args: {
    variant: 'default',
    size: 'default',
    defaultPressed: false,
    disabled: false,
  },
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => (
    <div className="flex items-center justify-center p-8">
      <Toggle {...args} aria-label="Toggle bold">
        <Bold />
      </Toggle>
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-4 p-8">
      <Toggle aria-label="Toggle italic (default)">
        <Italic />
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle italic (outline)">
        <Italic />
      </Toggle>
      <Toggle defaultPressed aria-label="Pressed (default)">
        <Star />
      </Toggle>
      <Toggle variant="outline" defaultPressed aria-label="Pressed (outline)">
        <Star />
      </Toggle>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-4 p-8">
      <Toggle size="sm" variant="outline" aria-label="Small">
        <Bold />
      </Toggle>
      <Toggle size="default" variant="outline" aria-label="Default">
        <Bold />
      </Toggle>
      <Toggle size="lg" variant="outline" aria-label="Large">
        <Bold />
      </Toggle>
    </div>
  ),
}

export const WithText: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-4 p-8">
      <Toggle variant="outline" defaultPressed>
        <Italic />
        Italic
      </Toggle>
      <Toggle variant="outline">
        <Star />
        Favorite
      </Toggle>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-4 p-8">
      <Toggle disabled aria-label="Disabled off">
        <Bold />
      </Toggle>
      <Toggle disabled defaultPressed variant="outline" aria-label="Disabled on">
        <Bold />
      </Toggle>
    </div>
  ),
}
