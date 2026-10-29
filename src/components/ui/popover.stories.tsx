import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import { Button } from './button'
import { Input } from './input'
import { Label } from './label'
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from './popover'

const meta = {
  title: 'Components/Popover',
  component: Popover,
  parameters: {
    docs: {
      description: {
        component:
          'A floating panel anchored to a trigger, built on `radix-ui` '
          + '`Popover`. `PopoverContent` is portaled with `align`/'
          + '`sideOffset`; `PopoverHeader`/`PopoverTitle`/'
          + '`PopoverDescription` structure the inside, and '
          + '`PopoverAnchor` can retarget the anchor point.',
      },
    },
  },
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8 pb-48">
      <Popover>
        <PopoverTrigger asChild>
          <Button className="border px-3 py-2">Open popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader>
            <PopoverTitle>Dimensions</PopoverTitle>
            <PopoverDescription>
              Set the dimensions for the layer.
            </PopoverDescription>
          </PopoverHeader>
          <div className="mt-4 grid gap-3">
            <div className="grid grid-cols-3 items-center gap-2">
              <Label htmlFor="width">Width</Label>
              <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-2">
              <Label htmlFor="height">Height</Label>
              <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  ),
}

export const Alignments: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-2 p-8 pb-48">
      {(['start', 'center', 'end'] as const).map(align => (
        <Popover key={align}>
          <PopoverTrigger asChild>
            <Button className="border px-3 py-2 capitalize">{align}</Button>
          </PopoverTrigger>
          <PopoverContent align={align}>
            <p className="text-sm">
              This popover is aligned to the
              {' '}
              <strong>{align}</strong>
              {' '}
              of its trigger.
            </p>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '`align` accepts `start` | `center` | `end`; `side` and '
          + '`sideOffset` on `PopoverContent` control the edge and '
          + 'gap.',
      },
    },
  },
}

export const Controlled: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false)

    return (
      <div className="flex flex-col items-center justify-center gap-4 p-8 pb-48">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button className="border px-3 py-2">Controlled popover</Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverHeader>
              <PopoverTitle>Controlled</PopoverTitle>
              <PopoverDescription>
                Open state lives in React — the button below closes it.
              </PopoverDescription>
            </PopoverHeader>
            <Button
              className="mt-4 border px-3 py-2"
              onClick={() => setOpen(false)}
            >
              Dismiss
            </Button>
          </PopoverContent>
        </Popover>
        <p className="text-sm text-muted-foreground">
          Open:
          {' '}
          {String(open)}
        </p>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          '`open`/`onOpenChange` control the panel — useful when '
          + 'closing depends on content actions.',
      },
    },
  },
}
