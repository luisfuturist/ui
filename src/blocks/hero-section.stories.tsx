import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '../components/ui/button'
import { HeroSection } from './hero-section'

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
