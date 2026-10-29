import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  PageHeader,
  Section,
  TOKEN_ROW_COLS,
  TokenRow,
} from './docs/primitives'

const meta = {
  title: 'Design Tokens/Semantic',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Role tokens in `styles/lfds.css` — each `--*` resolves a '
          + 'primitive palette var. Swatches and hex values read the '
          + 'live computed style, so use the toolbar theme toggle to '
          + 'compare light and dark. Resolution chains are the `:root` '
          + '(light) definitions.',
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

type Token = { name: string, chain: string, use: string }

function TokenGroup({ title, tokens }: { title: string, tokens: Token[] }) {
  return (
    <section className="flex flex-col gap-1">
      <h3 className="text-sm font-medium">{title}</h3>
      <div
        className={`grid ${TOKEN_ROW_COLS} items-center gap-x-4 font-mono text-[10px] tracking-widest uppercase opacity-50`}
      >
        <span />
        <span>token / resolved</span>
        <span>resolves</span>
        <span>usage</span>
      </div>
      {tokens.map(token => (
        <TokenRow
          key={token.name}
          name={token.name}
          chain={token.chain}
          use={token.use}
        />
      ))}
    </section>
  )
}

const base: Token[] = [
  { name: 'background', chain: '--white', use: 'App/page surface — body bg' },
  { name: 'foreground', chain: '--blue', use: 'Default text, icons, borders' },
  {
    name: 'background-secondary',
    chain: '--gray-1',
    use: 'Secondary panels, kbd/code fills',
  },
  {
    name: 'foreground-secondary',
    chain: '--cyan',
    use: 'Secondary accent text',
  },
]

const actions: Token[] = [
  {
    name: 'primary',
    chain: '--blue',
    use: 'Button default, Badge, Switch on, selection bg',
  },
  { name: 'primary-foreground', chain: '--white', use: 'Text on primary fills' },
  {
    name: 'secondary',
    chain: '--magenta',
    use: 'Button secondary, Badge secondary',
  },
  {
    name: 'secondary-foreground',
    chain: '--white',
    use: 'Text on secondary fills',
  },
  { name: 'muted', chain: '--gray-3', use: 'Muted fills' },
  {
    name: 'muted-foreground',
    chain: '--foreground',
    use: 'Muted text — resolves to full --foreground by design, not a subdued step',
  },
  {
    name: 'accent',
    chain: '--orange',
    use: 'Hover/focus fills: menus, ghost buttons; aug focus border',
  },
  { name: 'accent-foreground', chain: '--white', use: 'Text on accent fills' },
  {
    name: 'destructive',
    chain: '--red',
    use: 'Destructive buttons, aria-invalid rings — pairs with text-white',
  },
]

const surfaces: Token[] = [
  { name: 'card', chain: '--gray-1', use: 'Card bg, aug-surface-card inlay' },
  { name: 'card-foreground', chain: '--blue', use: 'Text on cards' },
  {
    name: 'popover',
    chain: '--background-secondary',
    use: 'Floating panels: Popover, menus, Select, Combobox; aug-surface inlay',
  },
  {
    name: 'popover-foreground',
    chain: '--foreground',
    use: 'Text on floating panels',
  },
  {
    name: 'input',
    chain: '--foreground',
    use: 'border-input on Input, Select, Toggle, Checkbox',
  },
  {
    name: 'ring',
    chain: '--accent → --orange',
    use: 'focus-visible rings: ring-ring/50 — orange focus ring in both themes',
  },
  {
    name: 'border',
    chain: '--white',
    use: 'border-border utility; aug-surface border ring',
  },
]

const links: Token[] = [
  { name: 'link-primary', chain: '--primary → --blue', use: 'Anchor color' },
  {
    name: 'link-primary-hover',
    chain: '--black (dark: --white)',
    use: 'Link + aug-button hover target',
  },
]

const charts: Token[] = [
  { name: 'chart-1', chain: '--blue', use: 'Chart series 1' },
  { name: 'chart-2', chain: '--green', use: 'Chart series 2' },
  { name: 'chart-3', chain: '--yellow', use: 'Chart series 3' },
  { name: 'chart-4', chain: '--magenta', use: 'Chart series 4' },
  { name: 'chart-5', chain: '--red', use: 'Chart series 5' },
]

const sidebar: Token[] = [
  { name: 'sidebar', chain: '--background-secondary', use: 'Sidebar shell bg' },
  {
    name: 'sidebar-foreground',
    chain: '--foreground',
    use: 'Sidebar text',
  },
  { name: 'sidebar-primary', chain: '--primary', use: 'Sidebar active items' },
  {
    name: 'sidebar-primary-foreground',
    chain: '--primary-foreground',
    use: 'Text on active items',
  },
  { name: 'sidebar-accent', chain: '--accent', use: 'Sidebar hover fills' },
  {
    name: 'sidebar-accent-foreground',
    chain: '--accent-foreground',
    use: 'Text on hover fills',
  },
  { name: 'sidebar-border', chain: '--border', use: 'Sidebar border ring' },
  { name: 'sidebar-ring', chain: '--ring', use: 'Sidebar focus rings' },
]

export const Roles: Story = {
  render: () => (
    <div className="flex flex-col gap-8 bg-background p-6 text-foreground">
      <PageHeader eyebrow="Design tokens" title="Semantic roles">
        Semantic roles decouple components from the palette: a Button reads
        {' '}
        <code className="font-mono">bg-primary</code>
        , never
        {' '}
        <code className="font-mono">--blue</code>
        {' '}
        directly. Chains below are the light
        {' '}
        <code className="font-mono">:root</code>
        {' '}
        definitions — dark theme rebinds the same roles to dark palette
        values.
      </PageHeader>
      <TokenGroup title="Base" tokens={base} />
      <TokenGroup title="Actions" tokens={actions} />
      <TokenGroup title="Surfaces" tokens={surfaces} />
      <TokenGroup title="Links" tokens={links} />
      <TokenGroup title="Charts" tokens={charts} />
      <TokenGroup title="Sidebar" tokens={sidebar} />
      <Section title="Conventions — flat by design">
        <p className="max-w-prose text-sm">
          LFDS ships no shadow or elevation tokens: depth is expressed with
          1px borders and clipped corners, not box-shadow. Overlays simply
          pin
          {' '}
          <code className="font-mono">z-50</code>
          {' '}
          (dialogs, sheets,
          drawers, popovers, tooltips) — there is no z-index scale to
          negotiate.
        </p>
        <p className="max-w-prose text-sm">
          Two more deliberate non-subtractions:
          {' '}
          <code className="font-mono">--muted-foreground</code>
          {' '}
          resolves
          to
          {' '}
          <code className="font-mono">--foreground</code>
          {' '}
          (muted text stays
          full-strength phosphor), and
          {' '}
          <code className="font-mono">--border</code>
          {' '}
          matches
          the background, so the bare
          {' '}
          <code className="font-mono">border-border</code>
          {' '}
          utility is invisible by design — components that need a visible
          ring use
          {' '}
          <code className="font-mono">border-foreground</code>
          {' '}
          or an
          aug border layer.
        </p>
      </Section>
    </div>
  ),
}
