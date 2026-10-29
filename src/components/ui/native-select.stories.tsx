import type { Meta, StoryObj } from '@storybook/react-vite'

import { Label } from './label'
import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from './native-select'

const meta = {
  title: 'Components/NativeSelect',
  component: NativeSelect,
  parameters: {
    docs: {
      description: {
        component:
          'A styled native `<select>` — no portal, no JS dropdown. '
          + '`NativeSelect` wraps the element in a relative container '
          + 'that fades the whole group when disabled and overlays a '
          + 'chevron icon. `NativeSelectOption` and '
          + '`NativeSelectOptGroup` are thin `Canvas`-colored wrappers '
          + 'around `<option>`/`<optgroup>`. Supports a `size` prop '
          + '(`"default"` or `"sm"`).',
      },
    },
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['default', 'sm'],
      description: 'Trigger height — `h-9` or `h-8`.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the select and fades the wrapper.',
    },
    required: {
      control: 'boolean',
      description: 'Marks the field required.',
    },
    'aria-invalid': {
      control: 'boolean',
      description: 'Applies destructive border/ring styling.',
    },
    defaultValue: {
      control: 'text',
      description: 'Initially selected option `value` (uncontrolled).',
    },
    children: {
      control: false,
      description: '`NativeSelectOption` / `NativeSelectOptGroup` children.',
    },
    className: {
      control: false,
    },
  },
  args: {
    size: 'default',
    disabled: false,
  },
} satisfies Meta<typeof NativeSelect>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => (
    <div className="flex items-center justify-center p-8">
      <NativeSelect {...args} className="w-56">
        <NativeSelectOption value="">Select a fruit</NativeSelectOption>
        <NativeSelectOption value="apple">Apple</NativeSelectOption>
        <NativeSelectOption value="banana">Banana</NativeSelectOption>
        <NativeSelectOption value="blueberry">Blueberry</NativeSelectOption>
      </NativeSelect>
    </div>
  ),
}

export const WithOptGroups: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <NativeSelect className="w-56">
        <NativeSelectOption value="">Select a food</NativeSelectOption>
        <NativeSelectOptGroup label="Fruits">
          <NativeSelectOption value="apple">Apple</NativeSelectOption>
          <NativeSelectOption value="banana">Banana</NativeSelectOption>
        </NativeSelectOptGroup>
        <NativeSelectOptGroup label="Vegetables">
          <NativeSelectOption value="carrot">Carrot</NativeSelectOption>
          <NativeSelectOption value="spinach">Spinach</NativeSelectOption>
        </NativeSelectOptGroup>
      </NativeSelect>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-4 p-8">
      <NativeSelect className="w-40">
        <NativeSelectOption>default</NativeSelectOption>
      </NativeSelect>
      <NativeSelect size="sm" className="w-40">
        <NativeSelectOption>sm</NativeSelectOption>
      </NativeSelect>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <NativeSelect disabled className="w-56" defaultValue="locked">
        <NativeSelectOption value="locked">Locked option</NativeSelectOption>
      </NativeSelect>
    </div>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <div className="grid w-56 gap-2">
        <Label htmlFor="native-country">Country</Label>
        <NativeSelect id="native-country" aria-invalid="true">
          <NativeSelectOption value="">Select a country</NativeSelectOption>
          <NativeSelectOption value="br">Brazil</NativeSelectOption>
          <NativeSelectOption value="pt">Portugal</NativeSelectOption>
          <NativeSelectOption value="us">United States</NativeSelectOption>
        </NativeSelect>
        <p className="text-sm text-destructive">Please choose a country.</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Composition with `Label` plus an `aria-invalid` state — the '
          + 'border and focus ring switch to destructive colors.',
      },
    },
  },
}
