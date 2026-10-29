import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import { Label } from './label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from './select'

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    docs: {
      description: {
        component:
          'A styled select built on `radix-ui`\'s `Select`. The module '
          + 'exports the full composition set: `Select` (root), '
          + '`Trigger` (with `size="sm"`), `Value`, `Content` '
          + '(portal + scroll buttons built in), `Group`, `Label`, '
          + '`Item` and `Separator`. `Content` defaults to '
          + '`position="item-aligned"`.',
      },
    },
  },
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'Initially selected item `value` (uncontrolled).',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the trigger and applies `opacity-50`.',
    },
    required: {
      control: 'boolean',
      description: 'Requires a selection for form submission.',
    },
    value: {
      control: false,
      description: 'Controlled selected value.',
    },
    onValueChange: {
      control: false,
      description: 'Called with the new `value` on selection.',
    },
  },
  args: {
    disabled: false,
  },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

const fruits = ['Apple', 'Banana', 'Blueberry', 'Grapes', 'Pineapple']

export const Playground: Story = {
  render: args => (
    <div className="flex items-center justify-center p-8">
      <Select {...args}>
        <SelectTrigger className="w-48">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          {fruits.map(fruit => (
            <SelectItem key={fruit} value={fruit.toLowerCase()}>
              {fruit}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  ),
}

export const WithGroupsAndLabels: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <Select>
        <SelectTrigger className="w-48">
          <SelectValue placeholder="Select a food" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Vegetables</SelectLabel>
            <SelectItem value="carrot">Carrot</SelectItem>
            <SelectItem value="spinach">Spinach</SelectItem>
            <SelectItem value="zucchini">Zucchini</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  ),
}

export const SmallTrigger: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <Select>
        <SelectTrigger size="sm" className="w-40">
          <SelectValue placeholder="Small trigger" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="one">Option one</SelectItem>
          <SelectItem value="two">Option two</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '`SelectTrigger size="sm"` renders the compact `h-8` variant.',
      },
    },
  },
}

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <Select disabled>
        <SelectTrigger className="w-48">
          <SelectValue placeholder="Unavailable" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="one">Option one</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
}

const timezones = [
  'Pacific/Midway',
  'America/Anchorage',
  'America/Los_Angeles',
  'America/Denver',
  'America/Chicago',
  'America/New_York',
  'America/Sao_Paulo',
  'Atlantic/Azores',
  'Europe/London',
  'Europe/Lisbon',
  'Europe/Madrid',
  'Europe/Berlin',
  'Europe/Paris',
  'Europe/Rome',
  'Europe/Athens',
  'Europe/Helsinki',
  'Africa/Cairo',
  'Asia/Jerusalem',
  'Asia/Dubai',
  'Asia/Karachi',
  'Asia/Kolkata',
  'Asia/Dhaka',
  'Asia/Bangkok',
  'Asia/Shanghai',
  'Asia/Tokyo',
  'Australia/Sydney',
  'Pacific/Auckland',
  'Pacific/Fiji',
]

export const ScrollableList: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <Select>
        <SelectTrigger className="w-56">
          <SelectValue placeholder="Select a timezone" />
        </SelectTrigger>
        <SelectContent position="popper">
          {timezones.map(tz => (
            <SelectItem key={tz} value={tz}>
              {tz}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Edge case: a long list scrolls inside the viewport, which is '
          + 'clamped to `--radix-select-content-available-height`; the '
          + 'built-in scroll buttons appear on overflow.',
      },
    },
  },
}

export const Controlled: Story = {
  render: function Render() {
    const [fruit, setFruit] = useState('')

    return (
      <div className="flex items-center justify-center p-8">
        <div className="grid w-56 gap-2">
          <Label htmlFor="controlled-select">Favorite fruit</Label>
          <Select value={fruit} onValueChange={setFruit}>
            <SelectTrigger id="controlled-select" className="w-full">
              <SelectValue placeholder="Pick one" />
            </SelectTrigger>
            <SelectContent>
              {fruits.map(f => (
                <SelectItem key={f} value={f.toLowerCase()}>
                  {f}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="text-sm text-muted-foreground">
            Value:
            {' '}
            <span className="font-medium text-foreground">
              {fruit || 'none'}
            </span>
          </p>
        </div>
      </div>
    )
  },
}
