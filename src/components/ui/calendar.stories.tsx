import type { Meta, StoryObj } from '@storybook/react-vite'
import type { DateRange } from 'react-day-picker'
import { useState } from 'react'

import { Calendar } from './calendar'

const meta = {
  title: 'Components/Calendar',
  component: Calendar,
  parameters: {
    docs: {
      description: {
        component:
          'A fully themed wrapper around '
          + '[react-day-picker](https://daypicker.dev/) `DayPicker`. '
          + 'Supports `mode="single" | "multiple" | "range"`, '
          + '`captionLayout="label" | "dropdown"`, `showOutsideDays` '
          + '(on by default), `numberOfMonths`, `disabled` matchers and '
          + 'a `buttonVariant` hook for the nav arrows.',
      },
    },
  },
  argTypes: {
    mode: {
      control: 'select',
      options: ['single', 'multiple', 'range'],
      description: 'Selection mode.',
    },
    captionLayout: {
      control: 'select',
      options: ['label', 'dropdown', 'dropdown-months', 'dropdown-years'],
      description: 'How the month caption renders.',
    },
    numberOfMonths: {
      control: 'number',
      description: 'Months displayed side by side.',
    },
    showOutsideDays: {
      control: 'boolean',
      description: 'Show days from adjacent months.',
    },
    selected: {
      control: false,
      description: 'Controlled selection — shape depends on `mode`.',
    },
    onSelect: {
      control: false,
      description: 'Called when the selection changes.',
    },
    className: {
      control: false,
    },
  },
  args: {
    mode: 'single',
    showOutsideDays: true,
  },
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: function Render(args) {
    const [selected, setSelected] = useState<Date | undefined>(new Date())

    return (
      <div className="flex items-center justify-center p-8">
        <Calendar
          {...args}
          mode="single"
          selected={selected}
          onSelect={setSelected}
          className="rounded-md border"
        />
      </div>
    )
  },
}

export const Range: Story = {
  render: function Render() {
    const [range, setRange] = useState<DateRange | undefined>({
      from: new Date(),
      to: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000),
    })

    return (
      <div className="flex items-center justify-center p-8">
        <Calendar
          mode="range"
          selected={range}
          onSelect={setRange}
          numberOfMonths={2}
          className="rounded-md border"
        />
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          '`mode="range"` with a controlled `DateRange` and '
          + '`numberOfMonths={2}` for the classic two-month picker.',
      },
    },
  },
}

export const DisabledDates: Story = {
  render: function Render() {
    const [selected, setSelected] = useState<Date | undefined>()
    const today = new Date()

    return (
      <div className="flex items-center justify-center p-8">
        <Calendar
          mode="single"
          selected={selected}
          onSelect={setSelected}
          disabled={[
            { before: today },
            { dayOfWeek: [0, 6] },
          ]}
          className="rounded-md border"
        />
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          '`disabled` accepts day-picker matchers — here past dates plus '
          + 'weekends are unselectable.',
      },
    },
  },
}

export const DropdownCaption: Story = {
  render: function Render() {
    const [selected, setSelected] = useState<Date | undefined>()

    return (
      <div className="flex items-center justify-center p-8">
        <Calendar
          mode="single"
          selected={selected}
          onSelect={setSelected}
          captionLayout="dropdown"
          startMonth={new Date(2015, 0)}
          endMonth={new Date(2030, 11)}
          className="rounded-md border"
        />
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          '`captionLayout="dropdown"` swaps the caption for month/year '
          + 'selects, bounded by `startMonth`/`endMonth`.',
      },
    },
  },
}
