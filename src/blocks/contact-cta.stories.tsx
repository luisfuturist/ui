import type { Meta, StoryObj } from '@storybook/react-vite'

import { ContactCTA } from './contact-cta'

const meta = {
  title: 'Blocks/ContactCTA',
  component: ContactCTA,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Full-bleed inverted CTA section — an exact port of the '
          + 'website\'s `ContactCTA.astro`. Renders an `<a>` wrapping '
          + 'an inverted `bg-foreground` surface with `bl-rect br-clip-y` '
          + 'augmented corners, a `font-display` headline, and a nested '
          + '`aug-button`/`aug-button-div` action chip. Props: `href`, '
          + '`title`, `actionLabel`, `icon`.',
      },
    },
  },
  // Full-bleed `layout: 'fullscreen'` so the block spans the canvas, but
  // wrapped in a padded frame so it doesn't hug the canvas edges while
  // being reviewed.
  decorators: [
    Story => (
      <div className="bg-background p-8 sm:p-12">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    title: { control: 'text' },
    actionLabel: { control: 'text' },
    icon: { control: false },
  },
  args: {
    href: '#footer',
  },
} satisfies Meta<typeof ContactCTA>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
