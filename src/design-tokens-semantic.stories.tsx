import type { Meta, StoryObj } from '@storybook/react-vite'
import { useEffect, useRef, useState } from 'react'

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

function ResolvedHex({ name }: { name: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [hex, setHex] = useState('')
  useEffect(() => {
    const el = ref.current
    if (!el) return
    setHex(getComputedStyle(el).backgroundColor)
  }, [name])
  return (
    <>
      <span
        ref={ref}
        className="hidden"
        style={{ backgroundColor: `var(--${name})` }}
      />
      {hex}
    </>
  )
}

// One fixed track template shared by header and every row, so the
// swatch / token / chain / usage columns line up across all groups.
const COLS = 'grid-cols-[2.5rem_17rem_14rem_minmax(0,1fr)]'

function TokenRow({ token }: { token: Token }) {
  return (
    <div className={`grid ${COLS} items-center gap-x-4 border-t border-foreground/15 py-3`}>
      <div
        className="size-10"
        style={{
          backgroundColor: `var(--${token.name})`,
          border: '1px solid var(--gray-2)',
        }}
      />
      <div className="flex min-w-0 flex-col">
        <code className="font-mono text-sm wrap-break-word">
          --{token.name}
        </code>
        <span className="font-mono text-xs opacity-60">
          <ResolvedHex name={token.name} />
        </span>
      </div>
      <code className="min-w-0 font-mono text-xs wrap-break-word opacity-70">
        {token.chain}
      </code>
      <span className="min-w-0 text-xs opacity-70">{token.use}</span>
    </div>
  )
}

function TokenGroup({ title, tokens }: { title: string, tokens: Token[] }) {
  return (
    <section className="flex flex-col gap-1">
      <h3 className="text-sm font-medium">{title}</h3>
      <div
        className={`grid ${COLS} items-center gap-x-4 font-mono text-[10px] tracking-widest uppercase opacity-50`}
      >
        <span />
        <span>token / resolved</span>
        <span>resolves</span>
        <span>usage</span>
      </div>
      {tokens.map(token => (
        <TokenRow key={token.name} token={token} />
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
    use: 'Subdued text: descriptions, placeholders',
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
  { name: 'ring', chain: '--blue', use: 'focus-visible rings: ring-ring/50' },
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
      <p className="max-w-prose text-sm">
        Semantic roles decouple components from the palette: a Button reads
        {' '}
        <code>bg-primary</code>
        , never
        {' '}
        <code>--blue</code>
        {' '}
        directly. Chains below are the light
        {' '}
        <code>:root</code>
        {' '}
        definitions — dark theme rebinds the same roles to dark palette
        values.
      </p>
      <TokenGroup title="Base" tokens={base} />
      <TokenGroup title="Actions" tokens={actions} />
      <TokenGroup title="Surfaces" tokens={surfaces} />
      <TokenGroup title="Links" tokens={links} />
      <TokenGroup title="Charts" tokens={charts} />
      <TokenGroup title="Sidebar" tokens={sidebar} />
    </div>
  ),
}
