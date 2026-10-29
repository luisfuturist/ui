import type { Meta, StoryObj } from '@storybook/react-vite'

import { Label } from './label'
import { Progress } from './progress'

const meta = {
  title: 'Components/Progress',
  component: Progress,
  parameters: {
    docs: {
      description: {
        component:
          'A `radix-ui` `Progress.Root` bar. `value` (0–`max`, default '
          + '`max=100`) drives a translateX on the indicator — `value='
          + 'null`/`undefined` renders `data-state="indeterminate"` '
          + 'with an empty track.',
      },
    },
  },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Current progress, `0`–`max`.',
    },
    max: {
      control: 'number',
      description: 'Maximum value (default `100`).',
    },
    className: {
      control: false,
    },
  },
  args: {
    value: 60,
  },
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => (
    <div className="flex items-center justify-center p-8">
      <Progress className="w-96" {...args} />
    </div>
  ),
}

export const Values: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <div className="grid w-96 gap-4">
        {[0, 25, 50, 75, 100].map(value => (
          <div key={value} className="grid gap-1.5">
            <span className="text-xs text-muted-foreground">
              {value}
              %
            </span>
            <Progress value={value} />
          </div>
        ))}
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'The standard 0 / 25 / 50 / 75 / 100 checkpoints.',
      },
    },
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <div className="grid w-96 gap-2">
        <div className="flex items-baseline justify-between">
          <Label htmlFor="upload">Uploading manifest</Label>
          <span className="text-sm text-muted-foreground">68%</span>
        </div>
        <Progress id="upload" value={68} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'A realistic composition: a `Label` row plus a percentage '
          + 'readout above the bar.',
      },
    },
  },
}

export const Indeterminate: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <div className="grid w-96 gap-2">
        <span className="text-xs text-muted-foreground">
          `value` omitted — `data-state="indeterminate"`
        </span>
        <Progress value={null} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Edge case: `value={null}` produces an empty track and '
          + '`data-state="indeterminate"` — hook a CSS animation onto '
          + 'that attribute for a true indeterminate shimmer.',
      },
    },
  },
}
