import type { Meta, StoryObj } from '@storybook/react-vite'

import { Kbd, KbdGroup } from './kbd'

const meta = {
  title: 'Components/Kbd',
  component: Kbd,
  parameters: {
    docs: {
      description: {
        component:
          'An inline `<kbd>` element for keyboard hints — a formal '
          + 'keycap: `--background-secondary` surface, solid '
          + '`--foreground` border with a thicker bottom edge, mono '
          + 'font, `min-w-5`, sized for single glyphs. '
          + '`KbdGroup` clusters several `Kbd`s into a combo. The '
          + 'keycap inverts inside `data-slot=tooltip-content` and '
          + 'follows the accent highlight of selected command/menu '
          + 'items.',
      },
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Key label — a glyph, letter or icon.',
    },
    className: {
      control: false,
    },
  },
  args: {
    children: 'K',
  },
} satisfies Meta<typeof Kbd>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const SingleKeys: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-2 p-8">
      <Kbd>⌘</Kbd>
      <Kbd>⇧</Kbd>
      <Kbd>⌥</Kbd>
      <Kbd>↵</Kbd>
      <Kbd>Esc</Kbd>
      <Kbd>Tab</Kbd>
      <Kbd>F1</Kbd>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Glyphs and word keys — `min-w-5` keeps single characters '
          + 'square while longer labels widen the key.',
      },
    },
  },
}

export const Combos: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-6 p-8">
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <Kbd>Shift</Kbd>
        <Kbd>P</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>⌥</Kbd>
        <Kbd>⌘</Kbd>
        <Kbd>←</Kbd>
      </KbdGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '`KbdGroup` renders a `<kbd>` wrapper with `gap-1` — the '
          + 'classic `⌘K` command-palette combo.',
      },
    },
  },
}

export const InSentence: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
        Press
        {' '}
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
        {' '}
        to open the expedition atlas, then use
        {' '}
        <Kbd>↑</Kbd>
        {' '}
        and
        {' '}
        <Kbd>↓</Kbd>
        {' '}
        to move between routes and
        {' '}
        <Kbd>↵</Kbd>
        {' '}
        to select one.
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '`Kbd` is `inline-flex` and `pointer-events-none`, so it '
          + 'sits inside running copy without breaking the baseline.',
      },
    },
  },
}

export const CustomSized: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-3 p-8">
      <Kbd className="h-6 min-w-6 px-1.5 text-sm">⌘</Kbd>
      <Kbd className="h-7 min-w-7 px-2 text-base">K</Kbd>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Edge case: the fixed `h-5`/text sizing can be overridden '
          + 'with `className` for denser or roomier keycaps.',
      },
    },
  },
}
