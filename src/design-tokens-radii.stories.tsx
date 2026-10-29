import type { Meta, StoryObj } from '@storybook/react-vite'

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

const radii = [
  'radius-xs',
  'radius-sm',
  'radius-md',
  'radius-lg',
  'radius-xl',
  'radius-2xl',
  'radius-3xl',
]

export const Scale: Story = {
  render: () => (
    <div className="flex flex-col gap-6 bg-background p-6 text-foreground">
      <p className="max-w-prose text-sm">
        Every
        {' '}
        <code>--radius-*</code>
        {' '}
        in
        {' '}
        <code>lfds.css</code>
        {' '}
        resolves to
        {' '}
        <code>var(--radius)</code>
        , which is
        {' '}
        <code>0</code>
        {' '}
        — intentional. The boxes below apply the utilities; none of them
        can produce a rounded corner.
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
      <section className="flex flex-col gap-3">
        <h3 className="text-sm font-medium">Corner shaping: aug clips</h3>
        <p className="max-w-prose text-sm">
          Instead of radius, LFDS surfaces get clipped corners from
          {' '}
          <code>augmented-ui</code>
          :
          {' '}
          <code>.aug-surface</code>
          {' '}
          cuts all four corners at
          {' '}
          <code>12px</code>
          {' '}
          (
          <code>--aug-tl1/tr1/bl1/br1</code>
          ),
          {' '}
          <code>.aug-surface-sm</code>
          {' '}
          at
          {' '}
          <code>8px</code>
          , and
          {' '}
          <code>.aug-button</code>
          {' '}
          cuts only
          {' '}
          <code>tr/bl</code>
          {' '}
          at
          {' '}
          <code>12px</code>
          . Rendered here with equivalent
          {' '}
          <code>clip-path</code>
          {' '}
          polygons.
        </p>
        <div className="flex flex-wrap items-end gap-6">
          <div className="flex flex-col items-start gap-2">
            <div
              className="h-16 w-24"
              style={{
                clipPath:
                  'polygon(12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px), 0 12px)',
                backgroundColor: 'var(--popover)',
                border: '1px solid var(--border)',
              }}
            />
            <code className="text-xs">.aug-surface</code>
            <span className="text-xs opacity-60">all corners 12px</span>
          </div>
          <div className="flex flex-col items-start gap-2">
            <div
              className="h-16 w-24"
              style={{
                clipPath:
                  'polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)',
                backgroundColor: 'var(--popover)',
                border: '1px solid var(--border)',
              }}
            />
            <code className="text-xs">.aug-surface-sm</code>
            <span className="text-xs opacity-60">all corners 8px</span>
          </div>
          <div className="flex flex-col items-start gap-2">
            <div
              className="h-16 w-24"
              style={{
                clipPath:
                  'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px), 0 0)',
                backgroundColor: 'var(--background-secondary)',
                border: '1px solid var(--border)',
              }}
            />
            <code className="text-xs">.aug-button</code>
            <span className="text-xs opacity-60">tr + bl 12px</span>
          </div>
        </div>
      </section>
    </div>
  ),
}
