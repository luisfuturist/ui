import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ReactNode } from 'react'

import { Button } from './components/ui/button'
import { Code, PageHeader, Section } from './docs/primitives'

const meta = {
  title: 'Design Tokens/Augmented',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'The LFDS signature: clipped "augmented" corners via '
          + '`data-augmented-ui` attributes + the `.aug-*` helper classes '
          + 'in `styles/lfds.css`, driven by the CSS-only `augmented-ui` '
          + 'engine. Carriers render plain square when the engine '
          + 'isn\'t loaded.',
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const sizes = [
  { bp: 'base', px: '32px' },
  { bp: '≥ 48rem (md)', px: '40px' },
  { bp: '≥ 64rem (lg)', px: '48px' },
]

const patterns = [
  {
    attr: 'tr-clip bl-clip both',
    carriers:
      'Card, Alert, AlertDialog, Dialog, Popover, HoverCard, every '
      + 'augmented* Button variant, the ContactCTA button + icon chip',
  },
  {
    attr: 'tl-clip tr-clip bl-clip br-clip both',
    carriers:
      'Drawer — all four declared; .aug-drawer zeroes the pair that sits '
      + 'on the screen edge per data-vaul-drawer-direction',
  },
  {
    attr: 'tl-clip bl-clip · tr-clip br-clip · bl-clip br-clip · tl-clip tr-clip (each + both)',
    carriers:
      'Sheet — clips only the two corners facing the screen interior; '
      + 'the pair on the edge stays square (side right/left/top/bottom)',
  },
  {
    attr: 'bl-rect br-clip-y both',
    carriers:
      'ContactCTA section — a full rect corner plus a y-axis clip at '
      + '--aug-size, the full-bleed block chrome',
  },
]

const classes = [
  {
    cls: '.aug-surface',
    sets: 'All-corner 12px clips, 1px border ring (--border), --popover inlay',
    usedBy: 'Popover, Alert, Card, Sheet, Drawer, AlertDialog, Dialog',
  },
  {
    cls: '.aug-surface-sm',
    sets: 'Tighter 8px clips on top of .aug-surface',
    usedBy: 'HoverCard',
  },
  {
    cls: '.aug-surface-card',
    sets: 'Inlay = --card',
    usedBy: 'Card, Alert',
  },
  {
    cls: '.aug-surface-bg',
    sets: 'Inlay = --background',
    usedBy: 'AlertDialog, Dialog, Sheet, Drawer',
  },
  {
    cls: '.aug-surface-fg',
    sets: 'Inlay = --foreground, border ring off — inverted fill',
    usedBy: 'Site tooltip look (no component uses it yet)',
  },
  {
    cls: '.aug-button',
    sets: 'tr/bl 12px, border --background, inlay --background-secondary; accent border on focus, accent fill on data-state=open',
    usedBy: 'Button variant="augmented", ContactCTA button',
  },
  {
    cls: '.aug-button-2',
    sets: 'Same geometry via --color-* tokens — legacy twin kept for parity',
    usedBy: '—',
  },
  {
    cls: '.aug-button-outline',
    sets: 'tr/bl 12px, --foreground ring, transparent inlay',
    usedBy: 'Button variant="augmented-outline"',
  },
  {
    cls: '.aug-button-inverted',
    sets: 'tr/bl 12px, --foreground inlay',
    usedBy: 'Button variant="augmented-inverted"',
  },
  {
    cls: '.aug-button-div',
    sets: 'tr/bl 12px, --foreground inlay — inner icon chip',
    usedBy: 'ContactCTA icon chip',
  },
  {
    cls: '.aug-contact-cta',
    sets: 'All four corners at var(--aug-size), --background ring, --foreground inlay',
    usedBy: 'ContactCTA block',
  },
  {
    cls: '.aug-drawer',
    sets: 'Zeroes the --aug-*1 pair on the screen edge, per drawer direction',
    usedBy: 'Drawer',
  },
  {
    cls: '.aug-pos-fixed / .aug-pos-absolute',
    sets: 'Restore positioning — [data-augmented-ui] forces relative|static to anchor the border/inlay pseudo-layers',
    usedBy: 'AlertDialog, Dialog, Sheet, Drawer',
  },
]

const carriers = [
  { name: 'Card', attr: 'tr-clip bl-clip both', cls: 'aug-surface aug-surface-card' },
  { name: 'Alert', attr: 'tr-clip bl-clip both', cls: 'aug-surface aug-surface-card' },
  { name: 'AlertDialog', attr: 'tr-clip bl-clip both', cls: 'aug-surface aug-surface-bg aug-pos-fixed' },
  { name: 'Dialog', attr: 'tr-clip bl-clip both (opt-in via `augmented` prop)', cls: 'aug-surface aug-surface-bg aug-pos-fixed' },
  { name: 'Sheet', attr: 'per-side corner pair + both', cls: 'aug-surface aug-surface-bg aug-pos-fixed' },
  { name: 'Drawer', attr: 'tl tr bl br-clip both', cls: 'aug-surface aug-surface-bg aug-pos-fixed aug-drawer' },
  { name: 'Popover', attr: 'tr-clip bl-clip both', cls: 'aug-surface' },
  { name: 'HoverCard', attr: 'tr-clip bl-clip both', cls: 'aug-surface aug-surface-sm' },
  {
    name: 'Button — augmented / augmented-outline / augmented-inverted',
    attr: 'tr-clip bl-clip both (auto-applied; prop overrides)',
    cls: 'aug-button / aug-button-outline / aug-button-inverted',
  },
  {
    name: 'ContactCTA (block)',
    attr: 'bl-rect br-clip-y both · tr-clip bl-clip both (button + chip)',
    cls: 'aug-contact-cta · aug-button · aug-button-div',
  },
]

const square = [
  'DropdownMenu',
  'ContextMenu',
  'Menubar',
  'Tooltip',
  'Command',
  'Select',
  'Combobox',
  'NativeSelect',
]

function Row({ children }: {
  children: ReactNode
}) {
  return (
    <div className="grid grid-cols-1 gap-1 border-t border-foreground/15 py-3 sm:grid-cols-[16rem_minmax(0,1fr)] sm:gap-x-4">
      {children}
    </div>
  )
}

export const Augmented: Story = {
  render: () => (
    <div className="flex flex-col gap-10 bg-background p-6 text-foreground">
      <PageHeader eyebrow="Design tokens" title="Augmented corners">
        The signature of the system: panels and buttons get clipped-corner
        chrome from
        {' '}
        <code className="font-mono">data-augmented-ui</code>
        {' '}
        attributes plus the
        {' '}
        <code className="font-mono">.aug-*</code>
        {' '}
        helper classes in
        {' '}
        <code className="font-mono">styles/lfds.css</code>
        , driven by the CSS-only
        {' '}
        <code className="font-mono">augmented-ui</code>
        {' '}
        engine. It's intentionally not a package dependency — consumers
        {' '}
        <code className="font-mono">import 'augmented-ui'</code>
        {' '}
        once, and without it every carrier falls back to plain square.
        The engine is loaded in this docs site, so the demos below are live.
      </PageHeader>

      <Section title="--aug-size">
        <p className="max-w-prose text-sm">
          One responsive scale token —
          {' '}
          <code className="font-mono">--aug-size</code>
          {' '}
          feeds the large clips on
          {' '}
          <code className="font-mono">.aug-contact-cta</code>
          . Component-level
          clips stay fixed (12px surfaces / 8px small surfaces / 12px
          buttons).
        </p>
        <div className="flex flex-wrap gap-6">
          {sizes.map(step => (
            <div key={step.bp} className="flex flex-col gap-1">
              <code className="font-mono text-xs opacity-60">{step.bp}</code>
              <span className="font-mono text-sm">{step.px}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Attribute patterns">
        <p className="max-w-prose text-sm">
          The attribute value declares which corners clip and which aug
          layers run —
          {' '}
          <code className="font-mono">clip</code>
          /
          <code className="font-mono">clip-y</code>
          /
          <code className="font-mono">rect</code>
          {' '}
          per corner, then
          {' '}
          <code className="font-mono">both</code>
          {' '}
          applies the border and
          inlay delegates that draw the ring and the fill.
        </p>
        {patterns.map(pattern => (
          <Row key={pattern.attr}>
            <code className="font-mono text-xs wrap-break-word">
              {pattern.attr}
            </code>
            <span className="min-w-0 text-xs opacity-70">
              {pattern.carriers}
            </span>
          </Row>
        ))}
      </Section>

      <Section title=".aug-* class inventory">
        <p className="max-w-prose text-sm">
          The attribute alone only clips; the
          {' '}
          <code className="font-mono">.aug-*</code>
          {' '}
          classes set the
          {' '}
          <code className="font-mono">--aug-*</code>
          {' '}
          custom properties (corner sizes, border ring, inlay fill) and the
          square-fallback colors.
        </p>
        <div
          className="grid grid-cols-1 gap-1 font-mono text-[10px] tracking-widest uppercase opacity-50 sm:grid-cols-[16rem_minmax(0,1fr)] sm:gap-x-4"
        >
          <span>class</span>
          <span>sets · used by</span>
        </div>
        {classes.map(entry => (
          <Row key={entry.cls}>
            <code className="font-mono text-xs wrap-break-word">
              {entry.cls}
            </code>
            <span className="min-w-0 text-xs opacity-70">
              {entry.sets}
              {' — '}
              <span className="opacity-70">{entry.usedBy}</span>
            </span>
          </Row>
        ))}
      </Section>

      <Section title="Live demos">
        <p className="max-w-prose text-sm">
          Rendered with the real classes — the
          {' '}
          <code className="font-mono">aug-surface</code>
          {' '}
          border ring is
          {' '}
          <code className="font-mono">--border</code>
          -colored (invisible by
          design), the
          {' '}
          <code className="font-mono">outline</code>
          {' '}
          button shows a
          foreground ring following the clipped contour.
        </p>
        <div className="flex flex-wrap items-end gap-6">
          <div className="flex flex-col items-start gap-2">
            <div
              data-augmented-ui="tl-clip tr-clip bl-clip br-clip both"
              className="aug-surface h-20 w-32"
            />
            <code className="text-xs">aug-surface</code>
          </div>
          <div className="flex flex-col items-start gap-2">
            <div
              data-augmented-ui="tl-clip tr-clip bl-clip br-clip both"
              className="aug-surface aug-surface-sm h-20 w-32"
            />
            <code className="text-xs">aug-surface-sm</code>
          </div>
          <div className="flex flex-col items-start gap-2">
            <div
              data-augmented-ui="tr-clip bl-clip both"
              className="aug-surface-fg h-20 w-32"
            />
            <code className="text-xs">aug-surface-fg</code>
          </div>
          <div className="flex flex-col items-start gap-2">
            <div
              data-augmented-ui="bl-rect br-clip-y both"
              className="aug-contact-cta [--aug-size:24px] flex h-20 w-32 items-center justify-center font-mono text-xs text-background"
            >
              cta
            </div>
            <code className="text-xs">aug-contact-cta</code>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="augmented" size="sm">augmented</Button>
          <Button variant="augmented-outline" size="sm">
            augmented-outline
          </Button>
          <Button variant="augmented-inverted" size="sm">
            augmented-inverted
          </Button>
        </div>
        <Code>
{`<Card data-augmented-ui="tr-clip bl-clip both" className="aug-surface aug-surface-card" />
<Button variant="augmented-inverted" /> // attr auto-applied`}
        </Code>
      </Section>

      <Section title="Coverage matrix">
        <p className="max-w-prose text-sm">
          Components that ship
          {' '}
          <code className="font-mono">data-augmented-ui</code>
          :
        </p>
        {carriers.map(carrier => (
          <div
            key={carrier.name}
            className="grid grid-cols-1 gap-1 border-t border-foreground/15 py-3 sm:grid-cols-[16rem_minmax(0,5fr)_minmax(0,6fr)] sm:gap-x-4"
          >
            <span className="text-xs font-medium">{carrier.name}</span>
            <code className="min-w-0 font-mono text-xs wrap-break-word opacity-70">
              {carrier.attr}
            </code>
            <code className="min-w-0 font-mono text-xs wrap-break-word opacity-70">
              {carrier.cls}
            </code>
          </div>
        ))}
        <p className="max-w-prose text-sm">
          Square by design — no
          {' '}
          <code className="font-mono">data-augmented-ui</code>
          :
          {' '}
          <code className="font-mono">{square.join(', ')}</code>
          . Small
          transient panels keep the plain square chrome.
        </p>
      </Section>
    </div>
  ),
}
