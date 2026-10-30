import type { Meta, StoryObj } from '@storybook/react-vite'

import { ProjectCard, ProjectGrid } from './project-card'

const meta = {
  title: 'Blocks/ProjectCard',
  component: ProjectCard,
  parameters: {
    docs: {
      description: {
        component:
          'A project card in the LFDS site\'s expedition style — mono '
          + '`index` eyebrow (`01`), a large `font-display` uppercase '
          + '`title`, muted `description`, `tags` rendered as square '
          + 'outline `Badge`s, and bracketed mono `[ label ]` links with '
          + 'an outward arrow — all on the `aug-surface`/`aug-surface-card` '
          + 'clipped-corner card chrome (`tr-clip bl-clip both`). `href` '
          + 'makes the title a link and reveals a hover arrow in the '
          + 'corner; `links` renders the footer link row. `ProjectGrid` '
          + 'is the responsive 1→2→3 column wrapper.',
      },
    },
  },
  argTypes: {
    index: { control: 'number' },
    title: { control: 'text' },
    description: { control: 'text' },
    tags: { control: 'object' },
    href: { control: 'text' },
    links: { control: 'object' },
  },
  args: {
    index: 1,
    title: 'Gaia',
    description:
      'An AI-native platform for conversational interfaces — '
      + 'real-time chat, memory and tool use.',
    tags: ['TypeScript', 'React', 'Vite'],
    href: 'https://9aia.com',
  },
  decorators: [
    Story => (
      <div className="mx-auto max-w-sm p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ProjectCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithLinks: Story = {
  args: {
    index: 2,
    title: 'Handl',
    description:
      'A small programming language exploring handle-based '
      + 'resource semantics.',
    tags: ['Rust', 'Parser', 'CLI'],
    links: [
      { label: 'GitHub', href: 'https://github.com/handl-lang' },
      { label: 'Docs', href: '#docs' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Footer links render the site\'s bracketed mono pattern — '
          + '`[ label ]` with a leading `arrow-outward` icon — hovering '
          + 'shifts to `--link-primary-hover`.',
      },
    },
  },
}

export const Minimal: Story = {
  args: {
    index: undefined,
    title: 'untitled-draft',
    description:
      'Everything except `title` is optional — no index eyebrow, '
      + 'no tag row, no footer links.',
    tags: [],
    href: undefined,
    links: [],
  },
  parameters: {
    docs: {
      description: {
        story:
          'With `index`, `href`, `tags` and `links` unset the card '
          + 'collapses to a plain title + description — no corner '
          + 'arrow, no badge row, no footer.',
      },
    },
  },
}

export const DenseContent: Story = {
  args: {
    index: 12,
    title: 'distributed-systems-field-notes-and-experiments',
    description:
      'A long-running notebook of distributed-systems experiments: '
      + 'consensus implementations, gossip-protocol simulators and a '
      + 'CRDT editor backend — documented end to end so the write-ups '
      + 'double as the project\'s own documentation site.',
    tags: [
      'TypeScript', 'Go', 'Raft', 'CRDT', 'gRPC', 'NATS', 'SQLite',
      'Docker', 'Nix',
    ],
    links: [
      { label: 'GitHub', href: '#' },
      { label: 'Docs', href: '#' },
      { label: 'Notes', href: '#' },
      { label: 'Talks', href: '#' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Edge case — a long kebab-case `title`, a paragraph-length '
          + '`description`, nine `tags` and four footer `links`. '
          + 'Badges and links wrap via `flex-wrap`.',
      },
    },
  },
}

const projects = [
  {
    index: 1,
    title: 'Gaia',
    description: 'AI-native conversational platform.',
    tags: ['TypeScript', 'React'],
    href: 'https://9aia.com',
  },
  {
    index: 2,
    title: 'Handl',
    description: 'Handle-semantics programming language.',
    tags: ['Rust', 'CLI'],
    links: [{ label: 'GitHub', href: 'https://github.com/handl-lang' }],
  },
  {
    index: 3,
    title: 'neuralmind.ai',
    description: 'Enterprise AI automation suite.',
    tags: ['Python', 'FastAPI'],
    href: 'https://neuralmind.ai',
  },
  {
    index: 4,
    title: 'm7tlab',
    description: 'Experimental web experiences lab.',
    tags: ['Astro', 'Three.js'],
    links: [{ label: 'GitHub', href: 'https://github.com/m7tlab' }],
  },
]

export const Grid: Story = {
  render: () => (
    <ProjectGrid className="p-4">
      {projects.map(project => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </ProjectGrid>
  ),
  decorators: [],
  parameters: {
    docs: {
      description: {
        story:
          '`ProjectGrid` lays cards out 1 → 2 → 3 columns across '
          + '`md`/`xl` breakpoints; `mt-auto` on the card footer keeps '
          + 'link rows aligned across uneven content.',
      },
    },
  },
}

export const ProjectsSection: Story = {
  render: () => (
    <section className="w-full px-6 py-16">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <div className="flex max-w-2xl flex-col gap-2">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            {'// expeditions'}
          </p>
          <h2 className="font-display text-3xl font-medium text-balance sm:text-4xl">
            Selected work
          </h2>
        </div>
        <ProjectGrid>
          {projects.map(project => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </ProjectGrid>
      </div>
    </section>
  ),
  decorators: [],
  parameters: {
    docs: {
      description: {
        story:
          'Composed section — a `// eyebrow` + display heading above '
          + 'the `ProjectGrid`, matching how the blocks headers are '
          + 'marked up in `FeatureGrid`/`StatsSection`.',
      },
    },
  },
}
