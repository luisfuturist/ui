import type { Meta, StoryObj } from '@storybook/react-vite'
import MaterialDelete from '~icons/material-symbols/delete'
import { useState } from 'react'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './alert-dialog'
import { Button } from './button'

const meta = {
  title: 'Components/AlertDialog',
  component: AlertDialog,
  parameters: {
    docs: {
      description: {
        component:
          'A modal for destructive confirmations, built on '
          + '`radix-ui` `AlertDialog`. Unlike `Dialog`, the footer '
          + 'pairs `AlertDialogCancel` with `AlertDialogAction` — '
          + 'focus lands on Cancel so the destructive action is never '
          + 'the default. `AlertDialogContent` supports `size="sm"` and '
          + 'the optional `AlertDialogMedia` icon well. Both buttons '
          + 'wrap `Button` and accept `variant`/`size`/`className`.',
      },
    },
  },
} satisfies Meta<typeof AlertDialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <AlertDialog defaultOpen>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Delete expedition</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete this expedition?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently remove the expedition log and all of
              its coordinates. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel variant="outline">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction className="bg-destructive px-3 py-2 text-background">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  ),
}

export const WithMedia: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Empty archive</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogMedia>
              <MaterialDelete />
            </AlertDialogMedia>
            <AlertDialogTitle>Empty the archive?</AlertDialogTitle>
            <AlertDialogDescription>
              All 42 stored transmissions will be wiped from the relay.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel variant="outline">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction className="bg-destructive px-3 py-2 text-background">
              Empty archive
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '`AlertDialogMedia` adds an icon well inside the header; '
          + 'at `size="default"` it spans the title + description '
          + 'rows on `sm` screens.',
      },
    },
  },
}

export const SmallSize: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Sign out</Button>
        </AlertDialogTrigger>
        <AlertDialogContent size="sm">
          <AlertDialogHeader>
            <AlertDialogTitle>Sign out?</AlertDialogTitle>
            <AlertDialogDescription>
              You will need your credentials to sign back in.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel variant="outline">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction variant="outline">
              Sign out
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '`size="sm"` narrows the panel to `max-w-xs` and switches '
          + 'the footer to a two-column grid.',
      },
    },
  },
}

export const Controlled: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false)
    const [deleted, setDeleted] = useState(0)

    return (
      <div className="flex flex-col items-center justify-center gap-4 p-8">
        <AlertDialog open={open} onOpenChange={setOpen}>
          <AlertDialogTrigger asChild>
            <Button variant="outline">Purge record</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Purge record?</AlertDialogTitle>
              <AlertDialogDescription>
                The record will be removed from local storage.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel variant="outline">
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                className="bg-destructive px-3 py-2 text-background"
                onClick={() => setDeleted(count => count + 1)}
              >
                Purge
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <p className="text-sm text-muted-foreground">
          Records purged:
          {' '}
          {deleted}
        </p>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          '`open`/`onOpenChange` control the dialog; the action '
          + 'callback runs before it closes.',
      },
    },
  },
}
