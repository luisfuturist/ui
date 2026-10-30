import type { Meta, StoryObj } from '@storybook/react-vite'

import { StatsSection } from './stats-section'
import { HeroSection } from './hero-section'
import { Button } from '../components/ui/button'

const meta = {
  title: 'Blocks/StatsSection',
  component: StatsSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A terminal-style metrics band — an optional `eyebrow`/`title` '
          + 'header above a bordered strip of stat cells separated by '
          + 'solid foreground dividers. Each cell renders a `>`-prefixed '
          + 'mono label, a large `font-display` `value` and an optional '
          + '`delta` with a `trend` icon (`up`/`down`/`neutral`, colored '
          + 'green/red/muted). `stats` accepts any count; cells share the '
          + 'row equally from `sm` up.',
      },
    },
  },
  decorators: [
    Story => (
      <div className="bg-background p-8 sm:p-12">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    eyebrow: { control: 'text' },
    title: { control: 'text' },
    stats: { control: false },
  },
} satisfies Meta<typeof StatsSection>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    eyebrow: '// metrics',
    title: 'By the numbers',
    stats: [
      { value: '128+', label: 'Components' },
      { value: '99.9%', label: 'Uptime' },
      { value: '42ms', label: 'Avg. response' },
      { value: '7y', label: 'In production' },
    ],
  },
}

export const WithTrends: Story = {
  args: {
    eyebrow: '// telemetry',
    title: 'This cycle',
    stats: [
      {
        value: '1,204',
        label: 'Installs',
        delta: '+12% vs last cycle',
        trend: 'up',
      },
      {
        value: '38ms',
        label: 'Latency',
        delta: '-6ms vs last cycle',
        trend: 'up',
      },
      {
        value: '3',
        label: 'Open issues',
        delta: '-2 vs last cycle',
        trend: 'down',
      },
      {
        value: '100%',
        label: 'Coverage',
        delta: 'unchanged',
        trend: 'neutral',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Each stat can carry a `delta` line tinted by `trend` — '
          + '`trending-up` (green), `trending-down` (red) or '
          + '`trending-flat` (muted).',
      },
    },
  },
}

export const NoHeader: Story = {
  args: {
    eyebrow: undefined,
    title: undefined,
    stats: [
      { value: '128+', label: 'Components' },
      { value: '17', label: 'Blocks' },
      { value: '7', label: 'Locales' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          '`eyebrow` and `title` are optional — omit both and the '
          + 'bordered stat strip renders on its own, ready to slot '
          + 'under any existing page heading.',
      },
    },
  },
}

export const ManyStats: Story = {
  args: {
    eyebrow: '// telemetry',
    title: 'Every cell shares the row',
    stats: [
      { value: '1,204', label: 'Installs', delta: '+12%', trend: 'up' },
      { value: '38ms', label: 'Latency', delta: '-6ms', trend: 'up' },
      { value: '3', label: 'Issues', delta: '-2', trend: 'down' },
      { value: '100%', label: 'Coverage', delta: 'flat', trend: 'neutral' },
      { value: '99.9%', label: 'Uptime' },
      { value: '42', label: 'Contributors' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Edge case — six stats. `sm:auto-cols-fr` keeps equal-width '
          + 'cells and the dividers stack vertically below `sm`.',
      },
    },
  },
}

export const LandingBand: Story = {
  render: args => (
    <div className="flex flex-col">
      <HeroSection
        eyebrow="// lfds"
        title="Numbers that ship"
        description="A hero flowing straight into a metrics band."
        actions={<Button>Get started</Button>}
        className="pb-8 sm:pb-8"
      />
      <StatsSection {...args} className="pt-0 sm:pt-0" />
    </div>
  ),
  args: {
    stats: [
      { value: '128+', label: 'Components' },
      { value: '99.9%', label: 'Uptime' },
      { value: '42ms', label: 'Avg. response' },
      { value: '7y', label: 'In production' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Composed landing fragment — `HeroSection` feeding directly '
          + 'into `StatsSection`, with `className` tightening the seam '
          + 'between the two blocks.',
      },
    },
  },
}
