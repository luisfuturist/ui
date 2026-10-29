import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from './button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from './drawer'
import { Input } from './input'
import { Label } from './label'
import { ScrollArea } from './scroll-area'

const meta = {
  title: 'Components/Drawer',
  component: Drawer,
  parameters: {
    docs: {
      description: {
        component:
          'A bottom sheet built on [vaul](https://vaul.emilkowal.ski/). '
          + '`direction` on the root moves the panel between `bottom` '
          + '(default), `top`, `left` and `right`; `DrawerContent` '
          + 'styles itself per direction and shows the drag handle on '
          + '`bottom`. `DrawerHeader`/`DrawerTitle`/`DrawerDescription` '
          + '+ `DrawerFooter`/`DrawerClose` structure the panel.',
      },
    },
  },
  argTypes: {
    direction: {
      control: 'radio',
      options: ['bottom', 'top', 'left', 'right'],
      description: 'Edge the drawer slides in from.',
    },
  },
  args: {
    direction: 'bottom',
  },
} satisfies Meta<typeof Drawer>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => (
    <div className="flex items-center justify-center p-8">
      <Drawer direction={args.direction}>
        <DrawerTrigger asChild>
          <Button variant="outline">Open drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Move goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center gap-2">
              <Button variant="outline" size="icon-sm">−</Button>
              <div className="text-4xl font-bold tabular-nums">350</div>
              <Button variant="outline" size="icon-sm">+</Button>
            </div>
            <p className="mt-2 text-center text-sm text-muted-foreground">
              calories/day
            </p>
          </div>
          <DrawerFooter>
            <Button variant="outline">Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Use the `direction` control to slide the panel in from '
          + 'each edge — the bottom variant shows the drag handle.',
      },
    },
  },
}

export const Directions: Story = {
  render: () => (
    <div className="flex flex-wrap items-center justify-center gap-2 p-8">
      {(['left', 'right', 'top'] as const).map(direction => (
        <Drawer key={direction} direction={direction}>
          <DrawerTrigger asChild>
            <Button variant="outline" className="capitalize">
              {direction}
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle className="capitalize">
                {direction}
                {' '}
                drawer
              </DrawerTitle>
              <DrawerDescription>
                {direction === 'top'
                  ? 'Anchored to the top edge, max 80vh.'
                  : `Slides in from the ${direction}, 3/4 width capped at sm.`}
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4 text-sm text-muted-foreground">
              Panel content for the
              {' '}
              {direction}
              {' '}
              drawer.
            </div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline">Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '`left`/`right` drawers are 3/4-width side panels; `top` '
          + 'mirrors the bottom sheet. The drag handle is only '
          + 'rendered for `direction="bottom"`.',
      },
    },
  },
}

export const WithScrollableForm: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">New waypoint</Button>
        </DrawerTrigger>
        <DrawerContent>
          <ScrollArea className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>New waypoint</DrawerTitle>
              <DrawerDescription>
                Add a stop to the current route.
              </DrawerDescription>
            </DrawerHeader>
            <form
              className="grid gap-4 p-4"
              onSubmit={event => event.preventDefault()}
            >
              <div className="grid gap-2">
                <Label htmlFor="wp-name">Name</Label>
                <Input id="wp-name" placeholder="Mos Eisley" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="wp-x">X coordinate</Label>
                <Input id="wp-x" placeholder="-1042.7" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="wp-y">Y coordinate</Label>
                <Input id="wp-y" placeholder="388.1" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="wp-notes">Notes</Label>
                <Input id="wp-notes" placeholder="Refuel + supplies" />
              </div>
            </form>
            <DrawerFooter>
              <Button variant="outline">Save waypoint</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </ScrollArea>
        </DrawerContent>
      </Drawer>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Center the content column with `mx-auto max-w-sm` on a '
          + '`ScrollArea` — `DrawerContent` caps height at `80vh` on '
          + 'vertical directions.',
      },
    },
  },
}
