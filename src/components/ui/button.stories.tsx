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
          + 'see the **Variants** and **Sizes** matrices. The '
          + '`augmented*` variants cover the clipped-corner '
          + 'augmented-ui looks; custom clip patterns still work via '
          + '`className` + `data-augmented-ui` (see the **AugmentedUI** '
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
      control: 'select',
      options: [
        'default',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
        'augmented',
        'augmented-outline',
        'augmented-inverted',
      ],
      description:
        'Visual style — `default` is the solid LFDS primary fill; '
        + '`outline` uses a solid foreground border (LFDS '
        + '`--border` matches the background, so a bare `border` '
        + 'would be invisible); `augmented`, `augmented-outline` and '
        + '`augmented-inverted` are the clipped-corner aug-button '
        + 'looks used across the website.',
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
        + 'provide the `--aug-*` custom properties — the `augmented*` '
        + 'variants supply their `.aug-button*` class and default this '
        + 'attribute to `tr-clip bl-clip both` when unset.',
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
  'augmented',
  'augmented-outline',
  'augmented-inverted',
] as const

export const Variants: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-6 p-8 sm:grid-cols-3 md:grid-cols-4">
      {variants.map(variant => (
        <div
          key={variant}
          className="flex flex-col items-center justify-center gap-2"
        >
          <Button variant={variant}>{variant}</Button>
          <span className="text-xs text-muted-foreground">{variant}</span>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'All nine `variant` styles — `default` is the solid LFDS '
          + 'primary fill; `outline` borders with solid '
          + '`border-foreground` because LFDS `--border` matches '
          + 'the background; the `augmented*` row renders the '
          + 'website\'s clipped-corner `aug-button` looks '
          + '(`.aug-button*` classes plus an auto-applied '
          + '`data-augmented-ui="tr-clip bl-clip both"`).',
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
  render: () => (
    <div className="flex flex-wrap items-center justify-center gap-6 p-8">
      <Button variant="augmented">augmented</Button>
      <Button variant="augmented-outline">augmented-outline</Button>
      <Button variant="augmented-inverted">augmented-inverted</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'The `augmented*` variants reproduce the website\'s '
          + 'aug-button set — `augmented` is the `.aug-button` solid '
          + '`background-secondary` inlay used by the navbar and '
          + 'settings menus, `augmented-outline` (`.aug-button-outline`) '
          + 'keeps the clipped solid-foreground border on a transparent '
          + 'inlay, and `augmented-inverted` (`.aug-button-inverted`) '
          + 'fills the clip with `--foreground` like the site\'s '
          + '`.aug-button-div`/`.aug-logo` chips. `Button` defaults '
          + '`data-augmented-ui="tr-clip bl-clip both"` for every '
          + '`augmented*` variant when no prop is given; the `--aug-*` '
          + 'properties are defined in `styles/lfds.css` and only render '
          + 'once the consumer loads `import \'augmented-ui\'` — the '
          + 'Tailwind bg/border utilities are the square fallback.',
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
