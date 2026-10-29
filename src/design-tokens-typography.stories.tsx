import type { Meta, StoryObj } from '@storybook/react-vite'

import { PageHeader } from './docs/primitives'

const meta = {
  title: 'Design Tokens/Typography',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'LFDS defines four `--font-*` tokens in `styles/lfds.css` — '
          + 'the Roboto family, in parity with luisfuturist.com. '
          + '`font-sans` (Roboto) is the body default; `font-mono` '
          + '(Roboto Mono) is the DS voice. This page documents the '
          + 'families and the size/weight/tracking roles components '
          + 'actually use.',
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const roles = [
  {
    name: 'Eyebrow',
    cls: 'font-mono text-sm tracking-widest uppercase',
    note: 'Section labels, overlines — hero-section eyebrow, docs page eyebrows',
    sample: 'Design tokens',
  },
  {
    name: 'Body',
    cls: 'text-sm',
    note: 'Default component text — buttons, inputs, menus',
    sample: 'Run the migration and verify the output.',
  },
  {
    name: 'Code / Kbd',
    cls: 'font-mono text-xs',
    note: 'code, kbd, pre — token names, commands',
    sample: '--radius: 0',
  },
  {
    name: 'Metric',
    cls: 'font-mono text-sm font-medium tabular-nums',
    note: 'Numbers that must align — chart tooltips, values',
    sample: '1,024.50ms',
  },
  {
    name: 'Heading',
    cls: 'font-mono text-3xl font-semibold tracking-tight',
    note: 'Block headings — hero-section (font-mono, up to sm:text-6xl)',
    sample: 'Deploy complete.',
  },
  {
    name: 'Display',
    cls: 'font-display text-6xl font-medium',
    note: 'contact-cta headline — the one component that sets font-display',
    sample: 'Connect now',
  },
]

const families = [
  {
    cls: 'font-sans',
    token: '--font-sans',
    stack: "'Roboto', sans-serif",
    use: 'Body default — component text, descriptions',
  },
  {
    cls: 'font-mono',
    token: '--font-mono',
    stack: "'Roboto Mono', sans-serif",
    use: 'DS voice — headings, labels, code, chrome',
  },
  {
    cls: 'font-display',
    token: '--font-display',
    stack: "'Roboto Condensed', sans-serif",
    use: 'Display headline — the contact-cta block',
  },
  {
    cls: 'font-flex',
    token: '--font-flex',
    stack: "'Roboto Flex', sans-serif",
    use: 'Variable-width display type (site wordmarks)',
  },
]

const scale = [
  { cls: 'text-xs', px: '12px' },
  { cls: 'text-sm', px: '14px' },
  { cls: 'text-base', px: '16px' },
  { cls: 'text-lg', px: '18px' },
  { cls: 'text-xl', px: '20px' },
  { cls: 'text-2xl', px: '24px' },
  { cls: 'text-3xl', px: '30px' },
  { cls: 'text-4xl', px: '36px' },
  { cls: 'text-5xl', px: '48px' },
  { cls: 'text-6xl', px: '60px' },
]

export const Type: Story = {
  render: () => (
    <div className="flex flex-col gap-10 bg-background p-6 text-foreground">
      <PageHeader eyebrow="Design tokens" title="Typography">
        Four Roboto faces — the families, the size/weight roles components
        use, and the scale. Consumers load the faces once via Google Fonts.
      </PageHeader>
      <section className="flex flex-col gap-3">
        <h3 className="text-sm font-medium">Families</h3>
        <p className="max-w-prose text-sm">
          The Roboto family, matching luisfuturist.com's
          {' '}
          <code>@theme</code>
          {' '}
          block. Components render in
          {' '}
          <code>font-sans</code>
          {' '}
          by default;
          {' '}
          <code>font-mono</code>
          {' '}
          carries the terminal voice — eyebrows, labels, code, block
          headings. Consumers load the faces once via Google Fonts.
        </p>
        {families.map(family => (
          <div
            key={family.cls}
            className="flex flex-col gap-1 border-t border-foreground/15 pt-3"
          >
            <div className="flex items-baseline gap-3">
              <code className="text-xs opacity-60">{family.cls}</code>
              <code className="text-xs opacity-60">{family.token}</code>
            </div>
            <p className={`${family.cls} text-2xl`}>Ag 0O1l — phosphor</p>
            <span className="font-mono text-xs opacity-60">
              {family.stack}
            </span>
            <span className="text-xs opacity-60">{family.use}</span>
          </div>
        ))}
      </section>
      <section className="flex flex-col gap-4">
        <h3 className="text-sm font-medium">Roles</h3>
        {roles.map(role => (
          <div
            key={role.name}
            className="flex flex-col gap-1 border-t border-foreground/15 pt-3"
          >
            <div className="flex items-baseline gap-3">
              <code className="text-xs opacity-60">{role.name}</code>
              <code className="text-xs opacity-60">{role.cls}</code>
            </div>
            <p className={role.cls}>{role.sample}</p>
            <span className="text-xs opacity-60">{role.note}</span>
          </div>
        ))}
      </section>
      <section className="flex flex-col gap-3">
        <h3 className="text-sm font-medium">Scale</h3>
        <div className="flex flex-wrap items-baseline gap-6">
          {scale.map(step => (
            <div key={step.cls} className="flex flex-col gap-1">
              <span className={`${step.cls} font-mono`}>Ag</span>
              <code className="text-xs opacity-60">
                {step.cls} · {step.px}
              </code>
            </div>
          ))}
        </div>
      </section>
    </div>
  ),
}
