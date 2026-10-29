import type { Meta, StoryObj } from '@storybook/react-vite'

import { PageHeader, Section } from './docs/primitives'

const meta = {
  title: 'Design Tokens/Radii',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'LFDS is squared: `--radius` is `0` and every `--radius-*` '
          + 'utility maps to it, so `rounded-*` never rounds. Corner '
          + 'shaping comes from `augmented-ui` clips instead of border '
          + 'radius.',
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const radii = ['radius-sm', 'radius-md', 'radius-2xl']

export const Scale: Story = {
  render: () => (
    <div className="flex flex-col gap-8 bg-background p-6 text-foreground">
      <PageHeader eyebrow="Design tokens" title="Radii">
        Squared by design — every
        {' '}
        <code className="font-mono">--radius-*</code>
        {' '}
        resolves to
        {' '}
        <code className="font-mono">var(--radius)</code>
        , which is
        {' '}
        <code className="font-mono">0</code>
        . Corner shaping comes from aug clips instead.
      </PageHeader>
      <section className="flex flex-col gap-3">
        <p className="max-w-prose text-sm">
          All seven
          {' '}
          <code>--radius-*</code>
          {' '}
          utilities in
          {' '}
          <code>lfds.css</code>
          {' '}
          map to
          {' '}
          <code>var(--radius)</code>
          {' '}
          — intentional, three shown here (the other four are identical).
          The boxes apply the utilities; none of them can produce a rounded
          corner.
        </p>
        <div className="flex flex-wrap items-end gap-6">
          {radii.map(name => (
            <div key={name} className="flex flex-col items-start gap-2">
              <div
                className="size-16"
                style={{
                  borderRadius: `var(--${name})`,
                  border: '2px solid var(--accent)',
                  backgroundColor: 'var(--background-secondary)',
                }}
              />
              <code className="text-xs">--{name}</code>
              <span className="text-xs opacity-60">→ 0</span>
            </div>
          ))}
        </div>
      </section>
      <Section title="Corner shaping: aug clips">
        <p className="max-w-prose text-sm">
          Instead of radius, LFDS surfaces get clipped corners from
          {' '}
          <code>augmented-ui</code>
          . The demos below use the real
          {' '}
          <code>.aug-*</code>
          {' '}
          classes (the engine is loaded in this docs
          site): a plain
          {' '}
          <code>border</code>
          {' '}
          on a
          {' '}
          <code>clip-path</code>
          {' '}
          element gets clipped away, so aug draws the border ring on its own
          clipped
          {' '}
          <code>::after</code>
          {' '}
          layer — the
          {' '}
          <code>outline</code>
          {' '}
          demo shows the ring following the contour.
        </p>
        <div className="flex flex-wrap items-end gap-6">
          <div className="flex flex-col items-start gap-2">
            <div
              data-augmented-ui="tl-clip tr-clip bl-clip br-clip both"
              className="aug-surface h-16 w-24"
            />
            <code className="text-xs">.aug-surface</code>
            <span className="text-xs opacity-60">all corners 12px</span>
          </div>
          <div className="flex flex-col items-start gap-2">
            <div
              data-augmented-ui="tl-clip tr-clip bl-clip br-clip both"
              className="aug-surface aug-surface-sm h-16 w-24"
            />
            <code className="text-xs">.aug-surface-sm</code>
            <span className="text-xs opacity-60">all corners 8px</span>
          </div>
          <div className="flex flex-col items-start gap-2">
            <div
              data-augmented-ui="tr-clip bl-clip both"
              className="aug-button-outline h-16 w-24"
            />
            <code className="text-xs">.aug-button-outline</code>
            <span className="text-xs opacity-60">tr + bl 12px, fg ring</span>
          </div>
          <div className="flex flex-col items-start gap-2">
            <div
              data-augmented-ui="tr-clip bl-clip both"
              className="aug-button-inverted h-16 w-24"
            />
            <code className="text-xs">.aug-button-inverted</code>
            <span className="text-xs opacity-60">tr + bl 12px, fg inlay</span>
          </div>
        </div>
        <p className="max-w-prose text-sm">
          Full attribute patterns, class inventory and the component
          coverage matrix live on
          {' '}
          <a
            className="text-link-primary underline underline-offset-4 hover:text-link-primary-hover"
            href="?path=/docs/design-tokens-augmented--docs"
            target="_top"
          >
            Design Tokens/Augmented
          </a>
          .
        </p>
      </Section>
    </div>
  ),
}
