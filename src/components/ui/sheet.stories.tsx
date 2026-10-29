import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from './button'
import { Input } from './input'
import { Label } from './label'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './sheet'

const meta = {
  title: 'Components/Sheet',
  component: Sheet,
  parameters: {
    docs: {
      description: {
        component:
          'An edge-anchored panel, built on `radix-ui` `Dialog`. '
          + '`SheetContent` takes `side="top"|"right"|"bottom"|"left"` '
          + '(default `right`) plus `showCloseButton`, and '
          + '`SheetHeader`/`SheetTitle`/`SheetDescription`/`SheetFooter` '
          + 'structure the content. `SheetFooter` pins itself to the '
          + 'bottom with `mt-auto`.',
      },
    },
  },
} satisfies Meta<typeof Sheet>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Open sheet</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're
              done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 px-4">
            <div className="grid gap-2">
              <Label htmlFor="sheet-name">Name</Label>
              <Input id="sheet-name" defaultValue="Pedro Duarte" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="sheet-username">Username</Label>
              <Input id="sheet-username" defaultValue="@peduarte" />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button variant="outline">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  ),
}

export const Sides: Story = {
  render: () => (
    <div className="flex flex-wrap items-center justify-center gap-2 p-8">
      {(['top', 'right', 'bottom', 'left'] as const).map(side => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="outline" className="capitalize">{side}</Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle className="capitalize">
                {side}
                {' '}
                sheet
              </SheetTitle>
              <SheetDescription>
                {side === 'top' || side === 'bottom'
                  ? 'Full-width panel with auto height.'
                  : 'Slides in at 3/4 width, capped at `sm:max-w-sm`.'}
              </SheetDescription>
            </SheetHeader>
            <SheetFooter>
              <SheetClose asChild>
                <Button variant="outline">Close</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '`side` on `SheetContent` picks the edge — `top`/`bottom` '
          + 'are full-width with auto height, `left`/`right` are '
          + 'full-height at 3/4 width.',
      },
    },
  },
}

export const WithForm: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Account settings</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Account settings</SheetTitle>
            <SheetDescription>
              Update how your handle appears across the fleet.
            </SheetDescription>
          </SheetHeader>
          <form
            className="grid gap-4 px-4"
            onSubmit={event => event.preventDefault()}
          >
            <div className="grid gap-2">
              <Label htmlFor="acct-display">Display name</Label>
              <Input id="acct-display" defaultValue="Luis" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="acct-callsign">Callsign</Label>
              <Input id="acct-callsign" defaultValue="@luisfuturist" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="acct-relay">Home relay</Label>
              <Input id="acct-relay" defaultValue="outer-rim-04" />
            </div>
          </form>
          <SheetFooter>
            <Button variant="outline">Save changes</Button>
            <SheetClose asChild>
              <Button variant="outline">Cancel</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '`SheetFooter` (`mt-auto`) pins actions to the panel bottom; '
          + 'pair your submit `Button` with a `SheetClose` cancel.',
      },
    },
  },
}
