import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Area,
  AreaChart as RechartsAreaChart,
  Bar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  Line,
  LineChart as RechartsLineChart,
  Pie,
  PieChart as RechartsPieChart,
  XAxis,
  YAxis,
} from 'recharts'

import type { ChartConfig } from './chart'
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from './chart'

const meta = {
  title: 'Components/Chart',
  component: ChartContainer,
  parameters: {
    docs: {
      description: {
        component:
          'A [recharts](https://recharts.org/) wrapper. `ChartContainer` '
          + 'takes a `config: ChartConfig` map of `dataKey → { label, '
          + 'color | theme }` and injects `--color-<key>` custom '
          + 'properties (per theme) that series read via '
          + '`stroke="var(--color-<key>)"`/`fill`. `ChartTooltipContent` '
          + 'and `ChartLegendContent` resolve labels/icons/colors from '
          + 'the same config.',
      },
    },
  },
  // `config`/`children` are required props — supply placeholders so
  // stories aren't forced to declare `args`.
  args: {
    config: {},
    children: null,
  },
} satisfies Meta<typeof ChartContainer>

export default meta
type Story = StoryObj<typeof meta>

const monthly = [
  { month: 'Jan', desktop: 186, mobile: 80 },
  { month: 'Feb', desktop: 305, mobile: 200 },
  { month: 'Mar', desktop: 237, mobile: 120 },
  { month: 'Apr', desktop: 173, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'Jun', desktop: 214, mobile: 140 },
]

const lineConfig = {
  desktop: { label: 'Desktop', color: 'var(--chart-1)' },
  mobile: { label: 'Mobile', color: 'var(--chart-2)' },
} satisfies ChartConfig

export const LineChart: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <ChartContainer config={lineConfig} className="min-h-64 w-full max-w-md">
        <RechartsLineChart data={monthly}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <YAxis tickLine={false} axisLine={false} tickMargin={8} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Line
            type="monotone"
            dataKey="desktop"
            stroke="var(--color-desktop)"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="mobile"
            stroke="var(--color-mobile)"
            strokeWidth={2}
            dot={false}
          />
        </RechartsLineChart>
      </ChartContainer>
    </div>
  ),
}

const barConfig = {
  desktop: { label: 'Visitors', color: 'var(--chart-3)' },
} satisfies ChartConfig

export const BarChart: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <ChartContainer config={barConfig} className="min-h-64 w-full max-w-md">
        <RechartsBarChart data={monthly}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <ChartTooltip content={<ChartTooltipContent hideLabel />} />
          <Bar
            dataKey="desktop"
            fill="var(--color-desktop)"
            radius={4}
          />
        </RechartsBarChart>
      </ChartContainer>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'The bar reads its color from the `desktop` config entry — '
          + 'the series `dataKey` is what `ChartTooltipContent` matches '
          + 'against the config keys.',
      },
    },
  },
}

const areaConfig = {
  signal: { label: 'Signal', color: 'var(--chart-4)' },
} satisfies ChartConfig

const signalData = [
  { sol: 'Sol 1', signal: 40 },
  { sol: 'Sol 2', signal: 62 },
  { sol: 'Sol 3', signal: 55 },
  { sol: 'Sol 4', signal: 90 },
  { sol: 'Sol 5', signal: 73 },
  { sol: 'Sol 6', signal: 96 },
]

export const AreaChart: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <ChartContainer config={areaConfig} className="min-h-64 w-full max-w-md">
        <RechartsAreaChart data={signalData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="sol"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
          <Area
            type="monotone"
            dataKey="signal"
            fill="var(--color-signal)"
            fillOpacity={0.3}
            stroke="var(--color-signal)"
            strokeWidth={2}
          />
        </RechartsAreaChart>
      </ChartContainer>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '`indicator="line"` switches the tooltip marker from a dot '
          + 'to a color bar.',
      },
    },
  },
}

const browserData = [
  { browser: 'chrome', visitors: 275, fill: 'var(--color-chrome)' },
  { browser: 'safari', visitors: 200, fill: 'var(--color-safari)' },
  { browser: 'firefox', visitors: 187, fill: 'var(--color-firefox)' },
  { browser: 'edge', visitors: 90, fill: 'var(--color-edge)' },
  { browser: 'other', visitors: 40, fill: 'var(--color-other)' },
]

const pieConfig = {
  visitors: { label: 'Visitors' },
  chrome: { label: 'Chrome', color: 'var(--chart-1)' },
  safari: { label: 'Safari', color: 'var(--chart-2)' },
  firefox: { label: 'Firefox', color: 'var(--chart-3)' },
  edge: { label: 'Edge', color: 'var(--chart-4)' },
  other: { label: 'Other', color: 'var(--chart-5)' },
} satisfies ChartConfig

export const PieChart: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <ChartContainer
        config={pieConfig}
        className="min-h-64 w-full max-w-xs"
      >
        <RechartsPieChart>
          <ChartTooltip content={<ChartTooltipContent hideLabel />} />
          <Pie
            data={browserData}
            dataKey="visitors"
            nameKey="browser"
            innerRadius={40}
            strokeWidth={4}
          />
          <ChartLegend content={<ChartLegendContent nameKey="browser" />} />
        </RechartsPieChart>
      </ChartContainer>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'For polar charts each datum carries `fill` pointing at the '
          + 'config-derived `--color-<key>` var, and `nameKey` tells '
          + 'the tooltip/legend which field maps to the config.',
      },
    },
  },
}
