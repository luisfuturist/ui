import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Design Tokens/Colors',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Every custom property defined in `styles/lfds.css` (the LFDS '
          + 'token layer). Swatches read the live `var(--*)` values, so '
          + 'use the toolbar theme toggle to compare light and dark.',
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

function Swatch({ name }: { name: string }) {
  return (
    <div className="flex min-w-28 flex-col gap-1">
      <div
        className="h-14 w-full rounded-md"
        style={{
          backgroundColor: `var(--${name})`,
          border: '1px solid var(--gray-2)',
        }}
      />
      <code className="text-xs wrap-break-word">--{name}</code>
    </div>
  )
}

function SwatchGroup({ title, names }: { title: string, names: string[] }) {
  return (
    <section className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">{title}</h3>
      <div className="flex flex-wrap gap-4">
        {names.map(name => (
          <Swatch key={name} name={name} />
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

const semantic = [
  'primary',
  'primary-foreground',
  'secondary',
  'secondary-foreground',
  'muted',
  'muted-foreground',
  'accent',
  'accent-foreground',
  'destructive',
]

const utilities = ['ring', 'border', 'input', 'link-primary', 'link-primary-hover']

const components = [
  'card',
  'card-foreground',
  'popover',
  'popover-foreground',
]

const charts = ['chart-1', 'chart-2', 'chart-3', 'chart-4', 'chart-5']

const sidebar = [
  'sidebar',
  'sidebar-foreground',
  'sidebar-primary',
  'sidebar-primary-foreground',
  'sidebar-accent',
  'sidebar-accent-foreground',
  'sidebar-border',
  'sidebar-ring',
]

export const Palette: Story = {
  render: () => (
    <div className="flex flex-col gap-8 bg-background p-6 text-foreground">
      <SwatchGroup title="Palette" names={palette} />
      <SwatchGroup title="Primary" names={primary} />
      <SwatchGroup title="Secondary" names={secondary} />
      <SwatchGroup title="Semantic" names={semantic} />
      <SwatchGroup title="Utilities" names={utilities} />
      <SwatchGroup title="Components" names={components} />
      <SwatchGroup title="Charts" names={charts} />
      <SwatchGroup title="Sidebar" names={sidebar} />
    </div>
  ),
}

const radii = [
  { name: 'radius-sm', note: 'calc(--radius - 4px)' },
  { name: 'radius-md', note: 'calc(--radius - 2px)' },
  { name: 'radius-lg', note: '--radius (0.625rem)' },
  { name: 'radius-xl', note: 'calc(--radius + 4px)' },
]

export const Radii: Story = {
  render: () => (
    <div className="flex flex-col gap-6 bg-background p-6 text-foreground">
      <p className="max-w-prose text-sm">
        Radius tokens derive from
        {' '}
        <code>--radius</code>
        {' '}
        (
        <code>0.625rem</code>
        ) and back Tailwind's
        {' '}
        <code>rounded-sm/md/lg/xl</code>
        {' '}
        utilities.
      </p>
      <div className="flex flex-wrap items-end gap-6">
        {radii.map(r => (
          <div key={r.name} className="flex flex-col items-start gap-2">
            <div
              className="size-16"
              style={{
                borderRadius: `var(--${r.name})`,
                border: '2px solid var(--accent)',
                backgroundColor: 'var(--background-secondary)',
              }}
            />
            <code className="text-xs">--{r.name}</code>
            <span className="text-xs opacity-60">{r.note}</span>
          </div>
        ))}
      </div>
    </div>
  ),
}
