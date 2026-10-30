import type { Meta, StoryObj } from '@storybook/react-vite'

import { SkillsList } from './skills-list'
import { StatsSection } from './stats-section'

const meta = {
  title: 'Blocks/SkillsList',
  component: SkillsList,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A grouped skills / tech-stack section following the site\'s '
          + 'two-column section layout — mono uppercase `title` in the '
          + 'narrow column, groups on a `border-foreground` top rule. '
          + 'Each `SkillGroup` gets a muted mono label and its `items` '
          + 'render as square bordered mono chips.',
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
    title: { control: 'text' },
    groups: { control: 'object' },
  },
  args: {
    title: 'Stack',
    groups: [
      {
        title: 'Languages',
        items: ['TypeScript', 'Rust', 'Python', 'Go'],
      },
      {
        title: 'Frontend',
        items: ['React', 'Astro', 'Tailwind CSS', 'Three.js'],
      },
      {
        title: 'Backend',
        items: ['Node.js', 'FastAPI', 'PostgreSQL', 'Redis'],
      },
      {
        title: 'Tooling',
        items: ['Vite', 'pnpm', 'Docker', 'GitHub Actions'],
      },
    ],
  },
} satisfies Meta<typeof SkillsList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const NoTitle: Story = {
  args: {
    title: undefined,
    groups: [
      {
        title: 'Languages',
        items: ['TypeScript', 'Rust', 'Python'],
      },
      {
        title: 'Frontend',
        items: ['React', 'Astro', 'Tailwind CSS'],
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Without `title` the left column disappears and the group '
          + 'list spans the full `lg` width (`lg:col-span-4`).',
      },
    },
  },
}

export const DenseGroup: Story = {
  args: {
    title: 'Stack',
    groups: [
      {
        title: 'Everything else',
        items: [
          'TypeScript', 'Rust', 'Python', 'Go', 'Elixir', 'Haskell',
          'React', 'Astro', 'SvelteKit', 'Next.js', 'Tailwind CSS',
          'Node.js', 'FastAPI', 'PostgreSQL', 'Redis', 'NATS', 'gRPC',
          'a-very-long-technology-name',
        ],
      },
      {
        title: 'Short',
        items: ['Vite', 'pnpm'],
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Edge case — one group with 18 items including a very long '
          + 'name, next to a two-item group. Chips `flex-wrap` inside '
          + 'the remaining column width.',
      },
    },
  },
}

export const ProfileFragment: Story = {
  render: () => (
    <div className="flex flex-col">
      <SkillsList
        title="Stack"
        groups={[
          {
            title: 'Languages',
            items: ['TypeScript', 'Rust', 'Python', 'Go'],
          },
          {
            title: 'Frontend',
            items: ['React', 'Astro', 'Tailwind CSS', 'Three.js'],
          },
        ]}
      />
      <StatsSection
        className="px-0 pb-0 sm:pb-0"
        stats={[
          { value: '7y', label: 'In production' },
          { value: '24', label: 'Projects shipped' },
          { value: '4', label: 'Languages daily' },
        ]}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Composed profile fragment — a skills list followed by a '
          + '`StatsSection` strip, the pairing a portfolio "about" '
          + 'page would use.',
      },
    },
  },
}
