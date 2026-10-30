import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '../components/ui/button'
import { HeroSection } from './hero-section'
import { SiteHeader } from './site-header'

const meta = {
  title: 'Blocks/HeroSection',
  component: HeroSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A top-of-page hero — optional mono `eyebrow`, a large '
          + 'display `title`, a muted `description` lede and an '
          + '`actions` slot for `Button`s (including '
          + '`data-augmented-ui` styled ones).',
      },
    },
  },
  argTypes: {
    eyebrow: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
    actions: { control: false },
  },
} satisfies Meta<typeof HeroSection>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    eyebrow: '// terminal-inspired components',
    title: 'Future <Awaits>',
    description:
      'A shadcn-style catalog tuned to the LFDS palette — compose '
      + 'blocks like this one straight from `src/blocks/`.',
    actions: (
      <>
        <Button>
          Get started
        </Button>
        <Button variant="outline">
          Browse components
        </Button>
      </>
    ),
  },
}

export const WithAugmentedButton: Story = {
  args: {
    eyebrow: '// augmented-ui ready',
    title: 'Embrace the Future',
    description:
      'Every `Button` accepts `data-augmented-ui` — pair it with the '
      + '`aug-button` class for clipped-corner chrome.',
    actions: (
      <>
        <Button variant="augmented">
          Initialize
        </Button>
        <Button variant="outline">
          Read the docs
        </Button>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          'The primary action uses `variant="augmented"` — the retro '
          + 'clipped-corner `aug-button` look from the LFDS site — '
          + 'alongside a plain bordered secondary.',
      },
    },
  },
}

export const Minimal: Story = {
  args: {
    title: 'Future <Awaits>',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Only `title` is required — no eyebrow, no lede, no '
          + 'actions. The big mono headline centers itself.',
      },
    },
  },
}

export const LeftAligned: Story = {
  args: {
    eyebrow: '// docs',
    title: 'Documentation, unceremonious',
    description:
      'A `className` variant — `items-start text-left` re-aligns '
      + 'the centered stack for editorial pages.',
    actions: <Button variant="outline">Read the reference</Button>,
    className: 'items-start text-left',
  },
  decorators: [
    Story => (
      <div className="mx-auto w-full max-w-5xl">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story:
          'Layout variant — the section is `items-center text-center` '
          + 'by default, but both are plain tailwind classes that '
          + '`cn` lets you override for a left-aligned hero.',
      },
    },
  },
}

export const UnderHeader: Story = {
  render: args => (
    <div className="flex flex-col">
      <SiteHeader
        links={[
          { label: 'Docs', href: '#' },
          { label: 'Blocks', href: '#' },
        ]}
        actions={<Button size="sm">Start</Button>}
        className="static"
      />
      <HeroSection {...args} className="py-16 sm:py-16" />
    </div>
  ),
  args: {
    eyebrow: '// terminal-inspired components',
    title: 'Future <Awaits>',
    description:
      'The hero immediately under the site chrome — the composed '
      + 'top of every LFDS page.',
    actions: <Button>Get started</Button>,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Composed page top — `SiteHeader` (un-stuck via '
          + '`className="static"`) flowing into the hero, the pairing '
          + 'a landing route actually renders.',
      },
    },
  },
}
