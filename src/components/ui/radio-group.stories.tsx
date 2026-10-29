import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import { Label } from './label'
import { RadioGroup, RadioGroupItem } from './radio-group'

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    docs: {
      description: {
        component:
          'A set of mutually exclusive options built on `radix-ui`\'s '
          + '`RadioGroup`. `RadioGroup` renders a `grid gap-3` container; '
          + 'each `RadioGroupItem` is a circular indicator that supports '
          + '`disabled` and `aria-invalid`. Pair items with `Label`s for '
          + 'accessible hit targets.',
      },
    },
  },
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'Initially selected item `value` (uncontrolled).',
    },
    value: {
      control: false,
      description: 'Controlled selected item `value`.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables every item in the group.',
    },
    required: {
      control: 'boolean',
      description: 'Requires a selection for form submission.',
    },
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'Radix orientation hint (affects arrow-key navigation).',
    },
    onValueChange: {
      control: false,
      description: 'Called with the new `value` on selection.',
    },
    className: {
      control: false,
    },
  },
  args: {
    defaultValue: 'comfortable',
    disabled: false,
  },
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

const densityOptions = [
  { value: 'default', label: 'Default' },
  { value: 'comfortable', label: 'Comfortable' },
  { value: 'compact', label: 'Compact' },
]

export const Playground: Story = {
  render: args => (
    <div className="flex items-center justify-center p-8">
      <RadioGroup {...args}>
        {densityOptions.map(option => (
          <div key={option.value} className="flex items-center gap-2">
            <RadioGroupItem value={option.value} id={`density-${option.value}`} />
            <Label htmlFor={`density-${option.value}`}>{option.label}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  ),
}

export const Controlled: Story = {
  render: function Render() {
    const [plan, setPlan] = useState('pro')

    return (
      <div className="flex items-center justify-center p-8">
        <div className="flex flex-col gap-4">
          <RadioGroup value={plan} onValueChange={setPlan}>
            {[
              { value: 'free', label: 'Free' },
              { value: 'pro', label: 'Pro' },
              { value: 'team', label: 'Team' },
            ].map(option => (
              <div key={option.value} className="flex items-center gap-2">
                <RadioGroupItem value={option.value} id={`plan-${option.value}`} />
                <Label htmlFor={`plan-${option.value}`}>{option.label}</Label>
              </div>
            ))}
          </RadioGroup>
          <p className="text-sm text-muted-foreground">
            Selected plan:
            {' '}
            <span className="font-medium text-foreground">{plan}</span>
          </p>
        </div>
      </div>
    )
  },
}

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-12 p-8">
      <RadioGroup defaultValue="a">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="a" id="item-a" />
          <Label htmlFor="item-a">Enabled item</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="b" id="item-b" disabled />
          <Label htmlFor="item-b" className="opacity-50">
            Disabled item
          </Label>
        </div>
      </RadioGroup>
      <RadioGroup defaultValue="x" disabled>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="x" id="item-x" />
          <Label htmlFor="item-x">Disabled group</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="y" id="item-y" />
          <Label htmlFor="item-y">Disabled group</Label>
        </div>
      </RadioGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Left: a single disabled item. Right: `disabled` on the root '
          + 'disables every item.',
      },
    },
  },
}

export const Invalid: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <RadioGroup defaultValue="email">
        {[
          { value: 'email', label: 'Email' },
          { value: 'phone', label: 'Phone' },
          { value: 'mail', label: 'Physical mail' },
        ].map(option => (
          <div key={option.value} className="flex items-center gap-2">
            <RadioGroupItem
              value={option.value}
              id={`contact-${option.value}`}
              aria-invalid="true"
            />
            <Label htmlFor={`contact-${option.value}`}>{option.label}</Label>
          </div>
        ))}
        <p className="text-sm text-destructive">Select a contact method.</p>
      </RadioGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '`aria-invalid` on `RadioGroupItem` swaps the border and focus '
          + 'ring to destructive colors.',
      },
    },
  },
}
