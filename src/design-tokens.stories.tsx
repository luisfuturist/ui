import type { Meta, StoryObj } from '@storybook/react-vite'

import { PageHeader, Swatch } from './docs/primitives'

const meta = {
  title: 'Design Tokens/Colors',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'The primitive palette in `styles/lfds.css` — every semantic '
          + 'role token resolves one of these. Swatches read the live '
          + '`var(--*)` values, so use the toolbar theme toggle to '
          + 'compare light and dark. Role-level tokens (primary, card, '
          + 'popover, sidebar, chart, links) live under '
          + '`Design Tokens/Semantic`.',
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

function SwatchGroup({ title, names }: { title: string, names: string[] }) {
  return (
    <section className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">{title}</h3>
      <div className="flex flex-wrap gap-4">
        {names.map(name => (
          <Swatch key={name} name={name} className="min-w-28" />
        ))}
      </div>
    </section>
  )
}

const palette = [
  'black',
  'white',
  'blue',
  'cyan',
  'green',
  'magenta',
  'red',
  'yellow',
  'orange',
  'gray-1',
  'gray-2',
  'gray-3',
]

const primary = ['background', 'foreground']

const secondary = ['background-secondary', 'foreground-secondary']

export const Palette: Story = {
  render: () => (
    <div className="flex flex-col gap-8 bg-background p-6 text-foreground">
      <PageHeader eyebrow="Design tokens" title="Colors">
        The twelve phosphor primitives plus the four base roles. Swatches
        read the live
        {' '}
        <code className="font-mono">var(--*)</code>
        {' '}
        values — the resolved color under each swatch re-samples when the
        toolbar theme toggle flips between light and dark.
      </PageHeader>
      <SwatchGroup title="Palette" names={palette} />
      <SwatchGroup title="Primary" names={primary} />
      <SwatchGroup title="Secondary" names={secondary} />
    </div>
  ),
}
