import type { Meta, StoryObj } from '@storybook/react-vite'

import { Checkbox } from './checkbox'
import { Label } from './label'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component:
          'A checkbox built on `radix-ui`\'s `Checkbox.Root`. Supports '
          + '`checked` (boolean or `"indeterminate"`), `defaultChecked`, '
          + '`disabled`, `required` and `aria-invalid`. The `peer` class '
          + 'lets sibling `Label`s dim via `peer-disabled`.',
      },
    },
  },
  argTypes: {
    defaultChecked: {
      control: 'boolean',
      description: 'Initial checked state (uncontrolled).',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables interaction and applies `opacity-50`.',
    },
    required: {
      control: 'boolean',
      description: 'Marks the checkbox required for form submission.',
    },
    'aria-invalid': {
      control: 'boolean',
      description: 'Applies destructive border/ring styling.',
    },
    checked: {
      control: false,
      description: 'Controlled checked state (`true`/`false`/`"indeterminate"`).',
    },
    onCheckedChange: {
      control: false,
      description: 'Called with the new `CheckedState` on toggle.',
    },
    className: {
      control: false,
    },
  },
  args: {
    defaultChecked: false,
    disabled: false,
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => (
    <div className="flex items-center justify-center p-8">
      <div className="flex items-center gap-2">
        <Checkbox id="playground" {...args} />
        <Label htmlFor="playground">Accept terms</Label>
      </div>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <div className="grid grid-cols-[auto_repeat(4,auto)] items-center gap-x-6 gap-y-4">
        <span className="text-sm text-muted-foreground" />
        <span className="text-sm font-medium">Default</span>
        <span className="text-sm font-medium">Checked</span>
        <span className="text-sm font-medium">Indeterminate</span>
        <span className="text-sm font-medium">Invalid</span>

        <span className="text-sm text-muted-foreground">Enabled</span>
        <Checkbox />
        <Checkbox defaultChecked />
        <Checkbox checked="indeterminate" />
        <Checkbox aria-invalid="true" />

        <span className="text-sm text-muted-foreground">Disabled</span>
        <Checkbox disabled />
        <Checkbox disabled defaultChecked />
        <Checkbox disabled checked="indeterminate" />
        <Checkbox disabled aria-invalid="true" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Matrix of checked states (`unchecked`, `checked`, '
          + '`"indeterminate"`) against `disabled` and `aria-invalid`.',
      },
    },
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <div className="flex max-w-xs flex-col gap-4">
        <div className="flex items-start gap-2">
          <Checkbox id="terms" defaultChecked />
          <div className="grid gap-1.5">
            <Label htmlFor="terms">Accept terms and conditions</Label>
            <p className="text-sm text-muted-foreground">
              You agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <Checkbox id="marketing" />
          <div className="grid gap-1.5">
            <Label htmlFor="marketing">Marketing emails</Label>
            <p className="text-sm text-muted-foreground">
              Receive occasional updates about new expeditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
}

export const DisabledWithLabel: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <div className="flex items-center gap-2">
        <Checkbox id="disabled" disabled />
        <Label htmlFor="disabled">Unavailable option</Label>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '`Checkbox` carries the `peer` class, so the sibling `Label` '
          + 'dims automatically via `peer-disabled:opacity-50`.',
      },
    },
  },
}
