import type { Meta, StoryObj } from '@storybook/react-vite'
import MaterialAdd from '~icons/material-symbols/add'

import { Button } from './button'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          'Renders a `<button>` element (or any element via `asChild`). '
          + 'The `variant` and `size` props are scaffolded through '
          + '`class-variance-authority`, but all variant and size maps are '
          + 'currently commented out — both props are accepted but do not '
          + 'apply any styles yet. Styling today comes entirely from '
          + '`className` and `data-augmented-ui` (see the **AugmentedUI** '
          + 'story).',
      },
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Button content.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables pointer events and applies `opacity-50`.',
    },
    asChild: {
      control: 'boolean',
      description:
        'Merges props into the immediate child element instead of '
        + 'rendering a `<button>` (Radix `Slot`).',
    },
    variant: {
      control: false,
      description:
        'Scaffolded via cva — all variants are currently commented out '
        + 'and apply no styles.',
    },
    size: {
      control: false,
      description:
        'Scaffolded via cva — all sizes are currently commented out '
        + 'and apply no styles.',
    },
    'data-augmented-ui': {
      control: 'text',
      description:
        'Declares [augmented-ui](https://augmented-ui.com/) deformations, '
        + 'e.g. `tr-clip bl-clip both`. Requires an `.aug-*` class to '
        + 'provide the `--aug-*` custom properties.',
    },
    onClick: {
      control: false,
      description: 'Native click handler.',
    },
    className: {
      control: false,
    },
  },
  args: {
    children: 'Button',
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    children: 'Playground',
    disabled: false,
  },
}

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
}

export const AsChild: Story = {
  args: {
    asChild: true,
    children: (
      <a href="https://github.com/luisfuturist" target="_blank" rel="noreferrer">
        Rendered as an anchor
      </a>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          'With `asChild`, the `Button` props (including '
          + '`data-augmented-ui` and classes) are merged onto the child '
          + 'element — here an `<a>` — instead of rendering a `<button>`.',
      },
    },
  },
}

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <MaterialAdd />
        New expedition
      </>
    ),
  },
}

export const AugmentedUI: Story = {
  args: {
    children: 'Augmented button',
    'data-augmented-ui': 'tr-clip bl-clip both',
    className: 'aug-button p-4 text-foreground bg-background-secondary',
  },
  parameters: {
    docs: {
      description: {
        story:
          'The same `data-augmented-ui="tr-clip bl-clip both"` + '
          + '`aug-button` combination used by the website\'s navbar and '
          + 'settings menus. The `--aug-*` properties and `.aug-button` '
          + 'class are defined in `styles/lfds.css`.',
      },
    },
  },
}

export const LongLabel: Story = {
  args: {
    children:
      'A very long button label that keeps going to check that whitespace-nowrap and flex layout behave correctly',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Edge case: the base classes include `whitespace-nowrap`, so a '
          + 'long label overflows rather than wrapping.',
      },
    },
  },
}
