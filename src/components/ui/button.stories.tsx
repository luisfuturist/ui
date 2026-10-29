import type { Meta, StoryObj } from '@storybook/react-vite'
import { Fragment } from 'react'
import MaterialAdd from '~icons/material-symbols/add'
import MaterialArrowForward from '~icons/material-symbols/arrow-forward'

import { Button } from './button'
import { Spinner } from './spinner'

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
          + 'the `data-augmented-ui` prop (see the **Augmented** '
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
        + 'would be invisible); `link` runs on the '
        + '`--link-primary`/`--link-primary-hover` tokens; '
        + '`augmented`, `augmented-outline` and `augmented-inverted` '
        + 'are the clipped-corner aug-button looks used across the '
        + 'website.',
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
        'Preset height/padding — text sizes step `h-7` → `h-10` and '
        + 'trim horizontal padding via `has-[>svg]` when an icon is '
        + 'present; `icon*` sizes render a square icon-only button.',
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

// Reproduces each variant's :hover look without pointer input — the
// classes mirror the hover utilities in `buttonVariants` and, for the
// `augmented*` set, the `.aug-button*:hover` rules in styles/lfds.css
// (the aug rules key off --aug-* custom properties, so the simulation
// flips the same properties: `[--aug-inlay-bg:…]!` overrides the
// `!important` inlay).
const hoverClass: Record<(typeof variants)[number], string> = {
  default: 'bg-primary/90',
  destructive: 'bg-destructive/90',
  outline: 'bg-accent text-accent-foreground',
  secondary: 'bg-secondary/80',
  ghost: 'bg-accent text-accent-foreground',
  link: 'text-link-primary-hover underline',
  augmented: 'text-link-primary-hover',
  'augmented-outline': 'bg-accent text-accent-foreground',
  'augmented-inverted':
    'bg-link-primary-hover [--aug-inlay-bg:var(--link-primary-hover)]!',
}

export const Variants: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <div className="grid grid-cols-[auto_repeat(3,auto)] items-center justify-items-center gap-x-8 gap-y-4">
        <span />
        <span className="text-sm font-medium">Default</span>
        <span className="text-sm font-medium">Hover</span>
        <span className="text-sm font-medium">Disabled</span>
        {variants.map(variant => (
          <Fragment key={variant}>
            <span className="justify-self-start text-sm text-muted-foreground">
              {variant}
            </span>
            <Button variant={variant}>Button</Button>
            <Button variant={variant} className={hoverClass[variant]}>
              Button
            </Button>
            <Button variant={variant} disabled>
              Button
            </Button>
          </Fragment>
        ))}
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'All nine `variant` styles against their Default, Hover and '
          + 'Disabled states. The Hover column is simulated — it '
          + 'applies the same utilities each variant\'s `:hover` state '
          + 'resolves to (for `augmented*`, the matching '
          + '`.aug-button*:hover` custom-property flips from '
          + '`styles/lfds.css`). Keyboard focus is uniform: every '
          + 'variant shows the shared `focus-visible` `--ring` halo, '
          + 'and the `augmented*` set additionally swaps its aug '
          + 'border to `--accent`. Disabled is `pointer-events-none` '
          + '+ `opacity-50` from the base classes.',
      },
    },
  },
}

const textSizes = ['xs', 'sm', 'default', 'lg'] as const
const iconSizes = ['icon-xs', 'icon-sm', 'icon', 'icon-lg'] as const

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-end justify-center gap-6 p-8">
      {textSizes.map(size => (
        <div key={size} className="flex flex-col items-center gap-2">
          <Button size={size}>Button</Button>
          <span className="text-xs text-muted-foreground">{size}</span>
        </div>
      ))}
      {iconSizes.map(size => (
        <div key={size} className="flex flex-col items-center gap-2">
          <Button size={size} aria-label={size}>
            <MaterialAdd />
          </Button>
          <span className="text-xs text-muted-foreground">{size}</span>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Text sizes `xs`–`lg` step `h-7` → `h-8` → `h-9` → `h-10` '
          + 'with proportional padding (`has-[>svg]` trims `px` when a '
          + 'direct-child icon is present); the square `icon-*` sizes '
          + 'take a single icon child.',
      },
    },
  },
}

const augmentedVariants = [
  'augmented',
  'augmented-outline',
  'augmented-inverted',
] as const

export const Augmented: Story = {
  render: () => (
    <div className="flex flex-wrap items-end justify-center gap-6 p-8">
      {augmentedVariants.map(variant => (
        <div key={variant} className="flex flex-col items-center gap-2">
          <Button variant={variant}>Button</Button>
          <span className="text-xs text-muted-foreground">{variant}</span>
        </div>
      ))}
      <div className="flex flex-col items-center gap-2">
        <Button variant="augmented" data-augmented-ui="tl-clip br-clip both">
          Button
        </Button>
        <span className="text-xs text-muted-foreground">
          augmented + custom clip
        </span>
      </div>
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
          + '`augmented*` variant when no prop is given — pass the prop '
          + 'to change the clip pattern (last column). The `--aug-*` '
          + 'properties are defined in `styles/lfds.css` and only render '
          + 'once the consumer loads `import \'augmented-ui\'` — the '
          + 'Tailwind bg/border utilities are the square fallback.',
      },
    },
  },
}

export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-wrap items-center justify-center gap-4 p-8">
      <Button>
        <MaterialAdd />
        New expedition
      </Button>
      <Button variant="outline">
        Continue
        <MaterialArrowForward />
      </Button>
      <Button size="icon" variant="secondary" aria-label="Add">
        <MaterialAdd />
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Icons compose as children — leading, trailing, or icon-only '
          + 'via the square `icon*` sizes. The base '
          + '`[&_svg]:size-4` rule sizes icons automatically and '
          + '`has-[>svg]` trims the horizontal padding.',
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

export const Loading: Story = {
  render: () => (
    <div className="flex flex-wrap items-center justify-center gap-4 p-8">
      <Button disabled>
        <Spinner />
        Saving…
      </Button>
      <Button disabled variant="outline">
        <Spinner />
        Loading
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Edge case: there is no `loading` prop — compose `disabled` '
          + '+ `Spinner` + label. `Spinner` satisfies the button '
          + '`[&_svg]:size-4` sizing rule automatically.',
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
