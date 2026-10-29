import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from './context-menu'

const meta = {
  title: 'Components/ContextMenu',
  component: ContextMenu,
  parameters: {
    docs: {
      description: {
        component:
          'A right-click menu, built on `radix-ui` `ContextMenu`. '
          + '`ContextMenuTrigger` wraps the target area; the content '
          + 'supports the same part set as `DropdownMenu` — `Item` '
          + '(with `variant="destructive"` and `inset`), '
          + '`CheckboxItem`, `RadioGroup`/`RadioItem`, `Sub`, `Label`, '
          + '`Separator` and `Shortcut`.',
      },
    },
  },
} satisfies Meta<typeof ContextMenu>

export default meta
type Story = StoryObj<typeof meta>

function TargetArea({ children }: { children?: React.ReactNode }) {
  return (
    <ContextMenuTrigger className="flex h-40 w-72 items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground">
      {children ?? 'Right click here'}
    </ContextMenuTrigger>
  )
}

export const Default: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <ContextMenu>
        <TargetArea />
        <ContextMenuContent className="w-64">
          <ContextMenuItem inset>
            Back
            <ContextMenuShortcut>⌘[</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem inset disabled>
            Forward
            <ContextMenuShortcut>⌘]</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem inset>
            Reload
            <ContextMenuShortcut>⌘R</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
              <ContextMenuItem>
                Save Page As…
                <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>Create Shortcut…</ContextMenuItem>
              <ContextMenuItem>Name Window…</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>Developer Tools</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuItem inset variant="destructive">
            Delete
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  ),
}

export const CheckboxAndRadioItems: Story = {
  render: function Render() {
    const [showBookmarks, setShowBookmarks] = useState(true)
    const [showFullUrls, setShowFullUrls] = useState(false)
    const [person, setPerson] = useState('pedro')

    return (
      <div className="flex items-center justify-center p-8">
        <ContextMenu>
          <TargetArea>Right click for view options</TargetArea>
          <ContextMenuContent className="w-56">
            <ContextMenuLabel inset>Appearance</ContextMenuLabel>
            <ContextMenuSeparator />
            <ContextMenuCheckboxItem
              checked={showBookmarks}
              onCheckedChange={setShowBookmarks}
            >
              Show Bookmarks Bar
              <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
            </ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem
              checked={showFullUrls}
              onCheckedChange={setShowFullUrls}
            >
              Show Full URLs
            </ContextMenuCheckboxItem>
            <ContextMenuSeparator />
            <ContextMenuLabel inset>People</ContextMenuLabel>
            <ContextMenuRadioGroup value={person} onValueChange={setPerson}>
              <ContextMenuRadioItem value="pedro">
                Pedro Duarte
              </ContextMenuRadioItem>
              <ContextMenuRadioItem value="colm">
                Colm Tuite
              </ContextMenuRadioItem>
            </ContextMenuRadioGroup>
          </ContextMenuContent>
        </ContextMenu>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          '`ContextMenuCheckboxItem`/`ContextMenuRadioItem` are '
          + 'controlled with `checked`/`value` + change handlers; the '
          + 'indicator is absolutely positioned, so siblings get an '
          + '`inset` indent.',
      },
    },
  },
}
