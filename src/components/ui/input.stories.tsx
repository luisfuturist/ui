import type { Meta, StoryObj } from '@storybook/react-vite'

import { Input } from './input'
import { Label } from './label'

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component:
          'A styled native `<input>`. All native attributes pass through '
          + '— `type`, `placeholder`, `disabled`, `required`, '
          + '`aria-invalid` and `file:` pseudo-element styling are handled '
          + 'by the base classes.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: [
        'text',
        'email',
        'password',
        'number',
        'file',
        'date',
        'search',
        'tel',
        'url',
      ],
      description: 'Native input type.',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables interaction and applies `opacity-50`.',
    },
    required: {
      control: 'boolean',
      description: 'Marks the field required.',
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
    type: 'text',
    placeholder: 'Enter text…',
    disabled: false,
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => (
    <div className="flex items-center justify-center p-8">
      <Input {...args} className="w-72" />
    </div>
  ),
}

export const Types: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <div className="grid w-72 gap-4">
        <Input type="text" placeholder="Text" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="number" placeholder="Number" />
        <Input type="file" />
        <Input type="date" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Common `type` values. `file` renders an inline `file:` '
          + 'pseudo-element button styled by the base classes.',
      },
    },
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <div className="grid w-72 gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="m@example.com" />
        <p className="text-sm text-muted-foreground">
          We'll never share your email.
        </p>
      </div>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <Input disabled placeholder="Disabled" defaultValue="Cannot edit" className="w-72" />
    </div>
  ),
}

export const Invalid: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <div className="grid w-72 gap-2">
        <Label htmlFor="invalid-email">Email</Label>
        <Input
          id="invalid-email"
          type="email"
          defaultValue="not-an-email"
          aria-invalid="true"
        />
        <p className="text-sm text-destructive">
          Please enter a valid email address.
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '`aria-invalid` swaps the border and focus ring to destructive '
          + 'colors — the same hook `FormControl` sets automatically.',
      },
    },
  },
}
