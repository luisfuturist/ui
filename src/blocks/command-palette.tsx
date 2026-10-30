import * as React from 'react'

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '../components/ui/command'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../components/ui/dialog'
import { cn } from '../lib/utils'

export interface CommandPaletteItem {
  label: React.ReactNode
  icon?: React.ReactNode
  shortcut?: React.ReactNode
  /** Explicit filter value — set it when `label` isn't plain text. */
  value?: string
  keywords?: string[]
  disabled?: boolean
  onSelect?: (value: string) => void
}

export interface CommandPaletteGroup {
  label: string
  items: CommandPaletteItem[]
}

export interface CommandPaletteProps
  extends Omit<React.ComponentProps<typeof Dialog>, 'children'> {
  groups?: CommandPaletteGroup[]
  placeholder?: string
  emptyText?: React.ReactNode
  /** Screen-reader-only dialog title. */
  title?: React.ReactNode
  /** Screen-reader-only dialog description. */
  description?: React.ReactNode
  showCloseButton?: boolean
  /** Forwarded to the `DialogContent` panel. */
  className?: string
}

export function CommandPalette({
  groups = [],
  placeholder = 'Type a command or search…',
  emptyText = 'No results found.',
  title = 'Command Palette',
  description = 'Search for a command to run…',
  showCloseButton = true,
  className,
  ...props
}: CommandPaletteProps) {
  return (
    <Dialog {...props}>
      <DialogHeader className="sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent
        data-slot="command-palette"
        className={cn('overflow-hidden p-0', className)}
        showCloseButton={showCloseButton}
        augmented={false}
      >
        <Command className="**:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          <CommandInput placeholder={placeholder} />
          <CommandList>
            <CommandEmpty>{emptyText}</CommandEmpty>
            {groups.map((group, groupIndex) => (
              <React.Fragment key={group.label}>
                {groupIndex > 0 && <CommandSeparator />}
                <CommandGroup heading={group.label}>
                  {group.items.map((item, itemIndex) => (
                    <CommandItem
                      key={`${group.label}-${itemIndex}`}
                      value={item.value}
                      keywords={item.keywords}
                      disabled={item.disabled}
                      onSelect={item.onSelect}
                    >
                      {item.icon}
                      {item.label}
                      {item.shortcut && (
                        <CommandShortcut>{item.shortcut}</CommandShortcut>
                      )}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </React.Fragment>
            ))}
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  )
}
