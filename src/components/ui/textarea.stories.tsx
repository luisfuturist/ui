import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import { Label } from './label'
import { Textarea } from './textarea'

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    docs: {
      description: {
        component:
          'A styled native `<textarea>` with `field-sizing-content`, so '
          + 'it grows with its content starting from `min-h-16`. Supports '
          + '`disabled`, `aria-invalid` and every native attribute.',
      },
    },
  },
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text.',
    },
    rows: {
      control: 'number',
      description: 'Native `rows` hint for the initial height.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables interaction and applies `opacity-50`.',
    },
    'aria-invalid': {
      control: 'boolean',
      description: 'Applies destructive border/ring styling.',
    },
    value: {
      control: false,
      description: 'Controlled value.',
    },
    onChange: {
      control: false,
      description: 'Native change handler.',
    },
    className: {
      control: false,
    },
  },
  args: {
    placeholder: 'Type your message here.',
    disabled: false,
  },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => (
    <div className="flex items-center justify-center p-8">
      <Textarea {...args} className="w-80" />
    </div>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <div className="grid w-80 gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" placeholder="Tell us about your expedition…" />
        <p className="text-sm text-muted-foreground">
          Your message will be relayed to the outpost team.
        </p>
      </div>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <Textarea
        disabled
        defaultValue="This field is read-only right now."
        className="w-80"
      />
    </div>
  ),
}

export const Invalid: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <div className="grid w-80 gap-2">
        <Label htmlFor="bio">Bio</Label>
        <Textarea
          id="bio"
          defaultValue="x"
          aria-invalid="true"
        />
        <p className="text-sm text-destructive">
          Bio must be at least 20 characters.
        </p>
      </div>
    </div>
  ),
}

export const WithCharacterCount: Story = {
  render: function Render() {
    const [value, setValue] = useState('')
    const max = 140

    return (
      <div className="flex items-center justify-center p-8">
        <div className="grid w-80 gap-2">
          <Label htmlFor="status">Status update</Label>
          <Textarea
            id="status"
            value={value}
            onChange={event => setValue(event.target.value)}
            maxLength={max}
            placeholder="What's happening?"
            aria-invalid={value.length === max}
          />
          <p className="text-right text-sm text-muted-foreground">
            {value.length}
            /
            {max}
          </p>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Controlled textarea with `maxLength` — the counter flips to '
          + '`aria-invalid` styling at the limit.',
      },
    },
  },
}
