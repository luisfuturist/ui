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
          + 'The `variant` and `size` props are implemented through '
          + '`class-variance-authority` and mapped to LFDS tokens — '
          + 'see the **Variants** and **Sizes** matrices. Augmented-ui '
          + 'styling via `className` + `data-augmented-ui` still works '
          + 'on top (see the **AugmentedUI** story).',
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
      control: 'select',
      options: [
        'default',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
      ],
      description:
        'Visual style — `default` is the solid LFDS primary fill; '
        + '`outline` uses a translucent foreground border (LFDS '
        + '`--border` matches the background, so a bare `border` '
        + 'would be invisible).',
    },
    size: {
      control: 'select',
      options: [
        'default',
        'xs',
        'sm',
        'lg',
        'icon',
        'icon-xs',
        'icon-sm',
        'icon-lg',
      ],
      description:
        'Preset height/padding — `icon*` sizes render a square '
        + 'icon-only button.',
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

const variants = [
  'default',
  'destructive',
  'outline',
  'secondary',
  'ghost',
  'link',
] as const

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center justify-center gap-4 p-8">
      {variants.map(variant => (
        <Button key={variant} variant={variant}>
          {variant}
        </Button>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'All six `variant` styles — `default` is the solid LFDS '
          + 'primary fill; `outline` borders with '
          + '`border-foreground/30` because LFDS `--border` matches '
          + 'the background.',
      },
    },
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center justify-center gap-4 p-8">
      <Button size="xs">xs</Button>
      <Button size="sm">sm</Button>
      <Button size="default">default</Button>
      <Button size="lg">lg</Button>
      <Button size="icon-xs" aria-label="icon-xs">
        <MaterialAdd />
      </Button>
      <Button size="icon-sm" aria-label="icon-sm">
        <MaterialAdd />
      </Button>
      <Button size="icon" aria-label="icon">
        <MaterialAdd />
      </Button>
      <Button size="icon-lg" aria-label="icon-lg">
        <MaterialAdd />
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Text sizes `xs`–`lg` plus the square `icon-*` sizes — '
          + 'icon buttons take a single icon child.',
      },
    },
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
