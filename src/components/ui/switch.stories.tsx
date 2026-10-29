import type { Meta, StoryObj } from '@storybook/react-vite'

import { Label } from './label'
import { Switch } from './switch'

const meta = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    docs: {
      description: {
        component:
          'A toggle switch built on `radix-ui`\'s `Switch.Root`. Supports '
          + '`checked`/`defaultChecked`, `disabled`, `required`, '
          + '`aria-invalid` and a custom `size` prop (`"default"` or '
          + '`"sm"`) exposed through `data-size`.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['default', 'sm'],
      description: 'Track size — `"default"` (w-8) or `"sm"` (w-6).',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Initial state (uncontrolled).',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables interaction and applies `opacity-50`.',
    },
    checked: {
      control: false,
      description: 'Controlled checked state.',
    },
    onCheckedChange: {
      control: false,
      description: 'Called with the new checked state on toggle.',
    },
    className: {
      control: false,
    },
  },
  args: {
    size: 'default',
    defaultChecked: false,
    disabled: false,
  },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => (
    <div className="flex items-center justify-center p-8">
      <Switch {...args} />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-8 p-8">
      <div className="flex items-center gap-2">
        <Switch id="size-default" defaultChecked />
        <Label htmlFor="size-default">default</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch id="size-sm" size="sm" defaultChecked />
        <Label htmlFor="size-sm">sm</Label>
      </div>
    </div>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <div className="flex w-64 items-center justify-between rounded-md border p-4">
        <Label htmlFor="airplane-mode">Airplane mode</Label>
        <Switch id="airplane-mode" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Typical settings-row composition: a `Label` bound via '
          + '`htmlFor` next to the switch.',
      },
    },
  },
}

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-8 p-8">
      <div className="flex items-center gap-2">
        <Switch id="off-disabled" disabled />
        <Label htmlFor="off-disabled">Off</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch id="on-disabled" disabled defaultChecked />
        <Label htmlFor="on-disabled">On</Label>
      </div>
    </div>
  ),
}

export const Invalid: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Switch id="consent" aria-invalid="true" />
          <Label htmlFor="consent">I agree to the telemetry policy</Label>
        </div>
        <p className="text-sm text-destructive">Consent is required.</p>
      </div>
    </div>
  ),
}
