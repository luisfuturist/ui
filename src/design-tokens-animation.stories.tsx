import type { Meta, StoryObj } from '@storybook/react-vite'
import { Progress } from './components/ui/progress'

const meta = {
  title: 'Design Tokens/Animation',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'The only animation token in `styles/lfds.css` is '
          + '`--animate-progress` (indeterminate progress bars). '
          + 'Everything else is a utility pattern: radix '
          + '`data-state` enter/exit classes and standard '
          + '`transition-*` durations.',
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const keyframes = [
  { at: '0%', transform: 'translateX(0) scaleX(0)' },
  { at: '40%', transform: 'translateX(0) scaleX(0.4)' },
  { at: '100%', transform: 'translateX(100%) scaleX(0.5)' },
]

const patterns = [
  {
    name: 'Enter',
    cls: 'animate-in fade-in-0 zoom-in-95',
    use: 'data-[state=open] on popovers, menus, dialogs',
  },
  {
    name: 'Exit',
    cls: 'animate-out fade-out-0 zoom-out-95',
    use: 'data-[state=closed] on the same panels',
  },
  {
    name: 'Side slide',
    cls: 'slide-in-from-{top,right,bottom,left}-2',
    use: 'data-[side=*] on floating panels',
  },
  {
    name: 'Menus',
    cls: 'duration-100',
    use: 'Dropdowns, selects, context menus',
  },
  {
    name: 'Dialogs',
    cls: 'duration-200',
    use: 'Dialog, AlertDialog content',
  },
  {
    name: 'Sheet',
    cls: 'duration-300 / duration-500',
    use: 'Sheet close / open, ease-in-out',
  },
  {
    name: 'Hover/focus',
    cls: 'transition-all / transition-[color,box-shadow]',
    use: 'Button, Badge, interactive items',
  },
]

export const Tokens: Story = {
  render: () => (
    <div className="flex flex-col gap-10 bg-background p-6 text-foreground">
      <section className="flex flex-col gap-3">
        <h3 className="text-sm font-medium">
          <code>--animate-progress</code>
        </h3>
        <code className="w-fit border border-foreground/20 bg-background-secondary px-3 py-2 text-xs">
          progress 1s infinite ease-in-out
        </code>
        <p className="max-w-prose text-sm">
          Backs the
          {' '}
          <code>animate-progress</code>
          {' '}
          utility on indeterminate
          {' '}
          <code>Progress</code>
          {' '}
          indicators (
          <code>value == null</code>
          {' '}
          →
          {' '}
          <code>origin-left animate-progress</code>
          ). Live:
        </p>
        <div className="w-80">
          <Progress />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs font-medium opacity-70">
            @keyframes progress
          </span>
          {keyframes.map(frame => (
            <div key={frame.at} className="flex gap-4 font-mono text-xs">
              <span className="w-8 opacity-60">{frame.at}</span>
              <span>{`transform: ${frame.transform};`}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-1">
        <h3 className="text-sm font-medium">Motion patterns</h3>
        <p className="max-w-prose text-sm">
          Not tokens — conventions. Panels animate via radix
          {' '}
          <code>data-state</code>
          /
          {' '}
          <code>data-side</code>
          {' '}
          attributes with
          {' '}
          <code>tw-animate-css</code>
          {' '}
          classes (the Tailwind v4 port of tailwindcss-animate — the
          consumer imports it, LFDS doesn't ship it); components use
          plain transitions for hover/focus.
        </p>
        {patterns.map(pattern => (
          <div
            key={pattern.name}
            className="flex items-baseline gap-4 border-t border-foreground/15 py-3"
          >
            <code className="w-32 shrink-0 text-xs opacity-60">
              {pattern.name}
            </code>
            <code className="flex-1 text-xs">{pattern.cls}</code>
            <span className="w-72 text-xs opacity-70">{pattern.use}</span>
          </div>
        ))}
      </section>
    </div>
  ),
}
