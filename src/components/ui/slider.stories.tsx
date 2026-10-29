import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import { Slider } from './slider'

const meta = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    docs: {
      description: {
        component:
          'A range input built on `radix-ui`\'s `Slider.Root`. The number '
          + 'of thumbs is derived from the length of `value`/`defaultValue` '
          + '— pass a two-element array for a range slider. Supports '
          + '`min`, `max`, `step`, `disabled` and '
          + '`orientation="vertical"`.',
      },
    },
  },
  argTypes: {
    defaultValue: {
      control: 'object',
      description:
        'Initial thumb positions — `[50]` for a single thumb, '
        + '`[25, 75]` for a range.',
    },
    min: {
      control: 'number',
      description: 'Minimum value.',
    },
    max: {
      control: 'number',
      description: 'Maximum value.',
    },
    step: {
      control: 'number',
      description: 'Increment between values.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables interaction and applies `opacity-50`.',
    },
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'Track orientation.',
    },
    value: {
      control: false,
      description: 'Controlled thumb positions.',
    },
    onValueChange: {
      control: false,
      description: 'Called with the new `number[]` on change.',
    },
    className: {
      control: false,
    },
  },
  args: {
    defaultValue: [50],
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
  },
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => (
    <div className="flex items-center justify-center p-8">
      <Slider {...args} className="w-64" />
    </div>
  ),
}

export const Range: Story = {
  args: {
    defaultValue: [25, 75],
  },
  render: args => (
    <div className="flex items-center justify-center p-8">
      <Slider {...args} className="w-64" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'A two-thumb range: `defaultValue={[25, 75]}` renders two '
          + 'thumbs and fills the segment between them.',
      },
    },
  },
}

export const WithSteps: Story = {
  args: {
    defaultValue: [50],
    step: 10,
  },
  render: args => (
    <div className="flex items-center justify-center p-8">
      <div className="flex w-64 flex-col gap-2">
        <Slider {...args} />
        <p className="text-center text-sm text-muted-foreground">
          Snaps in increments of 10
        </p>
      </div>
    </div>
  ),
}

export const Controlled: Story = {
  render: function Render() {
    const [volume, setVolume] = useState([30])

    return (
      <div className="flex items-center justify-center p-8">
        <div className="flex w-64 flex-col gap-2">
          <Slider value={volume} onValueChange={setVolume} max={100} step={1} />
          <p className="text-center text-sm text-muted-foreground">
            Volume:
            {' '}
            <span className="font-medium text-foreground">{volume[0]}</span>
            %
          </p>
        </div>
      </div>
    )
  },
}

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <Slider defaultValue={[60]} disabled className="w-64" />
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="flex h-64 items-center justify-center p-8">
      <Slider
        defaultValue={[40]}
        orientation="vertical"
        className="h-full"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '`orientation="vertical"` flips the track upright; it needs a '
          + 'tall container (`min-h-44` is built in).',
      },
    },
  },
}
