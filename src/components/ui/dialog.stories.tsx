import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import { Button } from './button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './dialog'
import { Input } from './input'
import { Label } from './label'
import { ScrollArea } from './scroll-area'

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    docs: {
      description: {
        component:
          'A general-purpose modal, built on `radix-ui` `Dialog`. '
          + '`DialogContent` includes the overlay and an optional top-'
          + 'right close button (`showCloseButton`, default on). '
          + '`DialogHeader`/`DialogFooter` + `DialogTitle`/'
          + '`DialogDescription` structure the panel; `DialogFooter '
          + 'showCloseButton` adds a “Close” that wraps `DialogClose`. '
          + 'For destructive confirmations use `AlertDialog` instead.',
      },
    },
  },
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Edit profile</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="dialog-name">Name</Label>
              <Input id="dialog-name" defaultValue="Pedro Duarte" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="dialog-username">Username</Label>
              <Input id="dialog-username" defaultValue="@peduarte" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Save changes</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  ),
}

export const Controlled: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false)

    return (
      <div className="flex items-center justify-center gap-2 p-8">
        <Button variant="outline" onClick={() => setOpen(true)}>
          Open dialog
        </Button>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Controlled dialog</DialogTitle>
              <DialogDescription>
                This dialog is opened via React state, not a
                `DialogTrigger`.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Done</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          '`open`/`onOpenChange` let external state drive the modal — '
          + 'no `DialogTrigger` required.',
      },
    },
  },
}

export const WithForm: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">New expedition</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>New expedition</DialogTitle>
            <DialogDescription>
              Log a new route for the archive.
            </DialogDescription>
          </DialogHeader>
          <form
            className="grid gap-4"
            onSubmit={event => event.preventDefault()}
          >
            <div className="grid gap-2">
              <Label htmlFor="exp-name">Name</Label>
              <Input id="exp-name" placeholder="Kessel Run" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="exp-parsecs">Distance (parsecs)</Label>
              <Input id="exp-parsecs" type="number" placeholder="12" />
            </div>
            <DialogFooter showCloseButton>
              <Button variant="outline" type="submit">
                Save expedition
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'A form inside the dialog; `DialogFooter showCloseButton` '
          + 'renders a “Close” `DialogClose` alongside your own '
          + 'buttons.',
      },
    },
  },
}

const paragraphs = Array.from(
  { length: 12 },
  (_, i) =>
    `Entry ${i + 1}. The relay picked up a faint signal from the outer rim — `
    + 'a repeating pattern, twelve parsecs out, matching no known beacon. '
    + 'We logged the coordinates and marked it for follow-up on the next '
    + 'pass, but the interference from the asteroid field made a clean '
    + 'recording impossible.',
)

export const ScrollableContent: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Expedition log</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Expedition log</DialogTitle>
            <DialogDescription>
              Transmissions from the outer rim relay.
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="max-h-64 pr-2 text-sm text-muted-foreground">
            <div className="space-y-4">
              {paragraphs.map(text => (
                <p key={text}>{text}</p>
              ))}
            </div>
          </ScrollArea>
          <DialogFooter showCloseButton />
        </DialogContent>
      </Dialog>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Edge case: `DialogContent` is a grid — a `max-h-*` '
          + '`ScrollArea` inside it scrolls long content while '
          + 'header and footer stay pinned.',
      },
    },
  },
}
