import type { Meta, StoryObj } from '@storybook/react-vite'

import { ScrollArea, ScrollBar } from './scroll-area'
import { Separator } from './separator'

const meta = {
  title: 'Components/ScrollArea',
  component: ScrollArea,
  parameters: {
    docs: {
      description: {
        component:
          'A `radix-ui` `ScrollArea.Root` with a built-in viewport and '
          + 'a vertical `ScrollBar`. Give the root a bounded size '
          + '(`h-*`/`w-*`) and it replaces native scrollbars with '
          + 'styled thumbs — add `<ScrollBar orientation="horizontal" '
          + '/>` for the second axis.',
      },
    },
  },
  argTypes: {
    className: {
      control: false,
    },
    children: {
      control: false,
    },
  },
} satisfies Meta<typeof ScrollArea>

export default meta
type Story = StoryObj<typeof meta>

const checkpoints = Array.from(
  { length: 30 },
  (_, i) => `Checkpoint ${String(i + 1).padStart(2, '0')}`,
)

export const Playground: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <ScrollArea className="h-72 w-56 rounded-md border">
        <div className="p-4">
          <p className="mb-3 text-sm font-medium">Route checkpoints</p>
          {checkpoints.map(name => (
            <div key={name}>
              <p className="py-2 text-sm text-muted-foreground">{name}</p>
              <Separator />
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <ScrollArea className="w-96 rounded-md border whitespace-nowrap">
        <div className="flex gap-4 p-4">
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={i}
              className="flex size-32 shrink-0 items-center justify-center rounded-md bg-muted"
            >
              <span className="text-sm text-muted-foreground">
                Map {i + 1}
              </span>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'A horizontal strip: children need `shrink-0` + '
          + '`whitespace-nowrap` on the area, and an explicit '
          + 'horizontal `ScrollBar`.',
      },
    },
  },
}

export const BothAxes: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <ScrollArea className="size-64 rounded-md border">
        <div className="w-[36rem] p-4">
          {Array.from({ length: 20 }, (_, i) => (
            <p
              key={i}
              className="py-2 text-sm whitespace-nowrap text-muted-foreground"
            >
              {`Survey row ${i + 1} — longitude readings, latitude readings, elevation notes, and marker descriptions that run wide`}
            </p>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Both axes: the default vertical bar plus a horizontal one, '
          + 'with `ScrollAreaPrimitive.Corner` filling the junction.',
      },
    },
  },
}

export const InCard: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <div className="w-72 rounded-xl border">
        <div className="border-b px-4 py-3">
          <p className="text-sm font-medium">Carrier pigeon log</p>
        </div>
        <ScrollArea className="h-48">
          <ul className="grid gap-1 p-3">
            {Array.from({ length: 15 }, (_, i) => (
              <li
                key={i}
                className="rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent"
              >
                Dispatch #{101 + i} — delivered
              </li>
            ))}
          </ul>
        </ScrollArea>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'A realistic composition: a fixed-height scroll region '
          + 'nested inside a bordered panel.',
      },
    },
  },
}
