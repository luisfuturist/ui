import * as React from 'react'
import MaterialSearch from '~icons/material-symbols/search'

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '../components/ui/input-group'
import { Kbd } from '../components/ui/kbd'
import { cn } from '../lib/utils'

export interface SearchBarProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> {
  placeholder?: string
  /** Hint chip rendered in a `Kbd` on the trailing edge — pass `null` to hide. */
  shortcut?: React.ReactNode
  /** Leading icon — defaults to the Material `search` glyph. */
  icon?: React.ReactNode
  /** Input mode: controlled value. */
  value?: string
  /** Input mode: uncontrolled initial value. */
  defaultValue?: string
  /**
   * Input mode: change handler. Passing `value`, `defaultValue` or
   * `onValueChange` renders a real input; without any of them the block
   * renders a button-like trigger instead.
   */
  onValueChange?: (value: string) => void
  /** Trigger mode: fired on click — wire it to a palette/dialog. */
  onOpen?: () => void
  disabled?: boolean
}

export function SearchBar({
  placeholder = 'Search…',
  shortcut = '⌘K',
  icon = <MaterialSearch />,
  value,
  defaultValue,
  onValueChange,
  onOpen,
  onClick,
  disabled,
  className,
  ...props
}: SearchBarProps) {
  const isInput =
    onValueChange !== undefined
    || value !== undefined
    || defaultValue !== undefined

  if (!isInput) {
    return (
      <button
        type="button"
        data-slot="search-bar"
        disabled={disabled}
        onClick={(event) => {
          onClick?.(event)
          onOpen?.()
        }}
        className={cn(
          'group/search-bar relative flex h-9 w-full min-w-0 cursor-pointer items-center gap-2 rounded-md border border-input px-3 text-sm shadow-xs transition-[color,box-shadow] outline-none dark:bg-background',
          'focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50',
          'disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        {...props}
      >
        <span className="shrink-0 text-muted-foreground [&_svg:not([class*='size-'])]:size-4">
          {icon}
        </span>
        <span
          data-slot="search-bar-placeholder"
          className="flex-1 truncate text-left text-muted-foreground"
        >
          {placeholder}
        </span>
        {shortcut != null && <Kbd>{shortcut}</Kbd>}
      </button>
    )
  }

  return (
    <InputGroup
      data-slot="search-bar"
      data-disabled={disabled || undefined}
      onClick={onClick}
      className={className}
      {...props}
    >
      <InputGroupAddon>
        {icon}
      </InputGroupAddon>
      <InputGroupInput
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        readOnly={value !== undefined && onValueChange === undefined}
        disabled={disabled}
        onChange={event => onValueChange?.(event.target.value)}
      />
      {shortcut != null && (
        <InputGroupAddon align="inline-end">
          <Kbd>{shortcut}</Kbd>
        </InputGroupAddon>
      )}
    </InputGroup>
  )
}
