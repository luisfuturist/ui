import type { Meta, StoryObj } from '@storybook/react-vite'

import { Checkbox } from './checkbox'
import { Input } from './input'
import { Label } from './label'

const meta = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    docs: {
      description: {
        component:
          'An accessible `<label>` built on `radix-ui`\'s `Label.Root`. '
          + 'It dims automatically when a preceding sibling has the `peer` '
          + 'class and is `disabled` (`peer-disabled`), or when an '
          + 'ancestor sets `data-disabled="true"` on a group.',
      },
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Label content.',
    },
    htmlFor: {
      control: 'text',
      description: 'ID of the associated control.',
    },
    className: {
      control: false,
    },
  },
  args: {
    children: 'Email address',
  },
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => (
    <div className="flex items-center justify-center p-8">
      <Label {...args} />
    </div>
  ),
}

export const WithInput: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <div className="grid w-72 gap-2">
        <Label htmlFor="email-input">Email</Label>
        <Input id="email-input" type="email" placeholder="m@example.com" />
      </div>
    </div>
  ),
}

export const Required: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <div className="grid w-72 gap-2">
        <Label htmlFor="required-input">
          Username
          <span className="text-destructive" aria-hidden="true">*</span>
        </Label>
        <Input id="required-input" required placeholder="luis" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'There is no built-in required marker — compose one with an '
          + 'inline asterisk.',
      },
    },
  },
}

export const DisabledPeer: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <div className="flex items-center gap-2">
        <Checkbox id="peer-disabled" disabled />
        <Label htmlFor="peer-disabled">Sync over satellite link</Label>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Edge case: `Checkbox` exposes the `peer` class, so a disabled '
          + 'control automatically dims its label via '
          + '`peer-disabled:opacity-50`.',
      },
    },
  },
}
