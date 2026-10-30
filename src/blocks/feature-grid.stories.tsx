import type { Meta, StoryObj } from '@storybook/react-vite'
import MaterialBolt from '~icons/material-symbols/bolt'
import MaterialCloud from '~icons/material-symbols/cloud'
import MaterialCode from '~icons/material-symbols/code'
import MaterialShield from '~icons/material-symbols/shield'
import MaterialTerminal from '~icons/material-symbols/terminal'
import MaterialStorage from '~icons/material-symbols/storage'

import { ContactCTA } from './contact-cta'
import { FeatureGrid } from './feature-grid'

const meta = {
  title: 'Blocks/FeatureGrid',
  component: FeatureGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A left-aligned `eyebrow`/`title`/`description` header above a '
          + 'square bordered grid of feature cells — the `gap-px '
          + 'bg-foreground` trick draws solid foreground hairlines '
          + 'between `bg-background` cells. Each cell takes an optional '
          + '`icon` (rendered in a square `bg-card` chip), a display '
          + '`title` and a muted `description`. `columns` (`2 | 3 | 4`, '
          + 'default `3`) sets the `lg` column count — the grid is 1 '
          + 'column on mobile and 2 from `sm`.',
      },
    },
  },
  decorators: [
    Story => (
      <div className="bg-background p-8 sm:p-12">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    eyebrow: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
    columns: { control: 'inline-radio', options: [2, 3, 4] },
    features: { control: false },
  },
} satisfies Meta<typeof FeatureGrid>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    eyebrow: '// capabilities',
    title: 'Built for the terminal',
    description:
      'Every block ships square, border-driven and theme-aware — no '
      + 'rounded corners, no surprises.',
    columns: 3,
    features: [
      {
        title: 'Composable',
        description:
          'Blocks assemble from the same primitives the components use — '
          + 'override any piece with `className`.',
      },
      {
        title: 'Theme-aware',
        description:
          'LFDS tokens flip between light and dark with a single '
          + '`.dark` class on the root.',
      },
      {
        title: 'augmented-ui ready',
        description:
          'Surfaces tagged `data-augmented-ui` gain clipped corners the '
          + 'moment the aug stylesheet loads.',
      },
    ],
  },
}

export const WithIcons: Story = {
  args: {
    eyebrow: '// modules',
    title: 'Six cells, six icons',
    columns: 3,
    features: [
      {
        icon: <MaterialTerminal />,
        title: 'Terminal-first',
        description:
          'Mono labels, `>` eyebrows and hairline dividers keep the '
          + 'command-line cadence.',
      },
      {
        icon: <MaterialBolt />,
        title: 'Fast by default',
        description:
          'Pure CSS surfaces — no runtime styling, no layout shift.',
      },
      {
        icon: <MaterialShield />,
        title: 'Accessible',
        description:
          'Semantic markup underneath the chrome: `dl`, `figure`, '
          + 'labeled inputs.',
      },
      {
        icon: <MaterialCode />,
        title: 'Typed props',
        description:
          'Every block exposes a `*Props` interface extending its root '
          + 'element\'s props.',
      },
      {
        icon: <MaterialStorage />,
        title: 'Data-driven',
        description:
          'Arrays in, markup out — `features`, `stats` and '
          + '`testimonials` map straight to cells.',
      },
      {
        icon: <MaterialCloud />,
        title: 'Drop-in',
        description:
          'Copy the file, import the styles — blocks have no extra '
          + 'dependencies beyond the UI primitives.',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Pass `icon` nodes (any `~icons/material-symbols/*` component) '
          + 'to render the square `bg-card` icon chip above each title.',
      },
    },
  },
}

export const FourColumns: Story = {
  args: {
    eyebrow: '// spec',
    title: 'Four across',
    columns: 4,
    features: [
      {
        icon: <MaterialTerminal />,
        title: 'Mono-first',
        description: 'Terminal cadence in every label.',
      },
      {
        icon: <MaterialBolt />,
        title: 'Zero runtime',
        description: 'Pure CSS surfaces, no layout shift.',
      },
      {
        icon: <MaterialShield />,
        title: 'Semantic',
        description: 'Accessible markup under the chrome.',
      },
      {
        icon: <MaterialCode />,
        title: 'Typed',
        description: 'A `*Props` interface per block.',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          '`columns={4}` — the widest preset — splits the strip into '
          + 'four cells from `lg` up (2 below `lg`, 1 on mobile).',
      },
    },
  },
}

export const MixedCells: Story = {
  args: {
    eyebrow: '// capabilities',
    title: 'Uneven content',
    columns: 3,
    features: [
      {
        icon: <MaterialTerminal />,
        title: 'Icon cell',
        description: 'This one carries an icon chip.',
      },
      {
        title: 'No icon',
        description: 'The chip is simply skipped when `icon` is unset.',
      },
      {
        title: 'A cell with a much longer description than its siblings',
        description:
          'Long copy wraps inside the fixed grid — the hairline '
          + 'dividers stretch so every row stays flush, which is '
          + 'exactly what the `gap-px bg-foreground` trick is for. '
          + 'Nothing overlaps and nothing leaves the grid.',
      },
      {
        icon: <MaterialStorage />,
        title: 'Short',
        description: 'Brief.',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Edge case — mixed cells: missing `icon`s, a long `title` '
          + 'and an oversized `description`. The grid lines stay '
          + 'continuous regardless of cell height.',
      },
    },
  },
}

export const BeforeCTA: Story = {
  render: args => (
    <div className="flex flex-col">
      <FeatureGrid {...args} className="pb-10 sm:pb-10" />
      <div className="px-6">
        <ContactCTA
          href="#contact"
          className="mb-0 min-h-0 lg:p-12"
        />
      </div>
    </div>
  ),
  args: {
    eyebrow: '// capabilities',
    title: 'Everything above the fold matters',
    columns: 3,
    features: [
      { title: 'Composable', description: 'Blocks assemble from the primitives.' },
      { title: 'Theme-aware', description: 'One `.dark` class flips the palette.' },
      { title: 'Drop-in', description: 'Copy the file, import the styles.' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Composed landing sequence — a feature grid handing off to '
          + 'the inverted `ContactCTA`, compacted with `className` '
          + '(`min-h-0`, reduced padding) for the docs canvas.',
      },
    },
  },
}
