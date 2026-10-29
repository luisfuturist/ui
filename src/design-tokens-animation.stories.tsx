import type { Meta, StoryObj } from '@storybook/react-vite'
import { Progress } from './components/ui/progress'
import { PageHeader, Section } from './docs/primitives'

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
    use: 'data-[state=open]/data-open on popovers, menus, dialogs',
  },
  {
    name: 'Exit',
    cls: 'animate-out fade-out-0 zoom-out-95',
    use: 'data-[state=closed]/data-closed on the same panels',
  },
  {
    name: 'Side slide',
    cls: 'slide-in-from-{top,right,bottom,left}-2',
    use: 'data-[side=*] on floating panels — 2-step offset from the trigger edge',
  },
  {
    name: 'Sheet slide',
    cls: 'slide-in-from-{side} / slide-out-to-{side}',
    use: 'Sheet content travels the full edge distance',
  },
  {
    name: 'Nav menu',
    cls: 'slide-{in,out}-{from,to}-{left,right}-52',
    use: 'data-[motion=from-*/to-*] on NavigationMenu viewport content',
  },
  {
    name: 'Accordion',
    cls: 'animate-accordion-down / animate-accordion-up',
    use: 'AccordionContent open/close on data-[state=*]',
  },
  {
    name: 'Combobox',
    cls: 'duration-100',
    use: 'The only panel with an explicit duration — menus set none',
  },
  {
    name: 'Dialogs',
    cls: 'duration-200',
    use: 'Dialog, AlertDialog content',
  },
  {
    name: 'Sheet',
    cls: 'duration-500 / duration-300',
    use: 'Sheet open / close, ease-in-out',
  },
  {
    name: 'Drawer',
    cls: 'vaul-driven transform',
    use: 'Drag + snap motion comes from vaul inline styles, not classes; the overlay uses animate-in fade-in-0',
  },
  {
    name: 'Skeleton',
    cls: 'animate-pulse',
    use: 'Skeleton loading placeholder',
  },
  {
    name: 'Spinner',
    cls: 'animate-spin',
    use: 'Spinner icon',
  },
  {
    name: 'Caret',
    cls: 'animate-caret-blink',
    use: 'InputOTP fake caret',
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
      <PageHeader eyebrow="Design tokens" title="Animation">
        One token — the indeterminate
        {' '}
        <code className="font-mono">Progress</code>
        {' '}
        sweep — plus the motion conventions the components actually use.
      </PageHeader>
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
      <Section title="Motion patterns" className="gap-1">
        <p className="max-w-prose text-sm">
          Not tokens — conventions. Panels animate via radix
          {' '}
          <code>data-state</code>
          /
          <code>data-side</code>
          {' '}
          attributes with
          {' '}
          <code>tw-animate-css</code>
          {' '}
          classes (the Tailwind v4 port of tailwindcss-animate —
          shipped inside
          {' '}
          <code>styles.css</code>
          , consumers don't install it); components use
          plain transitions for hover/focus.
        </p>
        {patterns.map(pattern => (
          <div
            key={pattern.name}
            className="grid grid-cols-[7rem_minmax(0,5fr)_minmax(0,6fr)] items-baseline gap-x-4 border-t border-foreground/15 py-3"
          >
            <code className="text-xs opacity-60">
              {pattern.name}
            </code>
            <code className="min-w-0 text-xs wrap-break-word">
              {pattern.cls}
            </code>
            <span className="min-w-0 text-xs opacity-70">{pattern.use}</span>
          </div>
        ))}
      </Section>
    </div>
  ),
}
