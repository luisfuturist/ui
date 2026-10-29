import type { Meta, StoryObj } from '@storybook/react-vite'
import MaterialUnfoldMore from '~icons/material-symbols/unfold-more'
import { useState } from 'react'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from './collapsible'

const meta = {
  title: 'Components/Collapsible',
  component: Collapsible,
  parameters: {
    docs: {
      description: {
        component:
          'An unstyled `radix-ui` `Collapsible` trio — `Root` manages '
          + '`open`/`defaultOpen`/`onOpenChange`, `CollapsibleTrigger` '
          + 'toggles, `CollapsibleContent` shows and hides. All styling '
          + '(chevron rotation, borders) is applied via `className` '
          + 'and `[data-state]` selectors.',
      },
    },
  },
  argTypes: {
    defaultOpen: {
      control: 'boolean',
      description: 'Initial open state (uncontrolled).',
    },
    open: {
      control: false,
      description: 'Controlled open state.',
    },
    onOpenChange: {
      control: false,
      description: 'Called with the next open state on toggle.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the collapsible and its trigger.',
    },
    className: {
      control: false,
    },
    children: {
      control: false,
    },
  },
  args: {
    defaultOpen: false,
  },
} satisfies Meta<typeof Collapsible>

export default meta
type Story = StoryObj<typeof meta>

const triggerClass =
  'flex w-full items-center justify-between gap-4 rounded-md px-4 py-3 '
  + 'text-left text-sm font-medium hover:bg-accent '
  + '[&[data-state=open]>svg]:rotate-180 disabled:pointer-events-none '
  + 'disabled:opacity-50'

export const Playground: Story = {
  render: args => (
    <div className="flex items-center justify-center p-8">
      <Collapsible className="w-96 rounded-md border" {...args}>
        <CollapsibleTrigger className={triggerClass}>
          Supply manifest
          <MaterialUnfoldMore className="size-4 shrink-0 text-muted-foreground transition-transform duration-200" />
        </CollapsibleTrigger>
        <CollapsibleContent className="grid gap-1.5 px-4 pb-4 text-sm text-muted-foreground">
          <span>Compass × 2</span>
          <span>Dried rations × 14</span>
          <span>Signal flares × 5</span>
        </CollapsibleContent>
      </Collapsible>
    </div>
  ),
}

export const Controlled: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false)

    return (
      <div className="flex items-center justify-center p-8">
        <div className="grid w-96 gap-3">
          <Collapsible
            open={open}
            onOpenChange={setOpen}
            className="rounded-md border"
          >
            <CollapsibleTrigger className={triggerClass}>
              Route details
              <MaterialUnfoldMore className="size-4 shrink-0 text-muted-foreground transition-transform duration-200" />
            </CollapsibleTrigger>
            <CollapsibleContent className="px-4 pb-4 text-sm text-muted-foreground">
              Depart at dawn, follow the ridge east, regroup at the
              third checkpoint before nightfall.
            </CollapsibleContent>
          </Collapsible>
          <p className="text-sm text-muted-foreground">
            The collapsible is
            {' '}
            <span className="font-medium text-foreground">
              {open ? 'open' : 'closed'}
            </span>
            .
          </p>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Controlled mode: `open` + `onOpenChange` let surrounding UI '
          + 'react to the state.',
      },
    },
  },
}

export const DefaultOpen: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <Collapsible
        defaultOpen
        className="w-96 rounded-md border"
      >
        <CollapsibleTrigger className={triggerClass}>
          Weather bulletin
          <MaterialUnfoldMore className="size-4 shrink-0 text-muted-foreground transition-transform duration-200" />
        </CollapsibleTrigger>
        <CollapsibleContent className="px-4 pb-4 text-sm text-muted-foreground">
          Clear skies for the next three days. Winds shift northerly on
          the fourth — pack accordingly.
        </CollapsibleContent>
      </Collapsible>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '`defaultOpen` starts uncontrolled in the expanded state — '
          + 'note the chevron is already rotated.',
      },
    },
  },
}

export const DisabledTrigger: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <Collapsible disabled className="w-96 rounded-md border">
        <CollapsibleTrigger className={triggerClass}>
          Locked section
          <MaterialUnfoldMore className="size-4 shrink-0 text-muted-foreground transition-transform duration-200" />
        </CollapsibleTrigger>
        <CollapsibleContent className="px-4 pb-4 text-sm text-muted-foreground">
          This content is unreachable while the trigger is disabled.
        </CollapsibleContent>
      </Collapsible>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Edge case: `disabled` is forwarded to the trigger, dimming '
          + 'it and removing pointer events.',
      },
    },
  },
}
