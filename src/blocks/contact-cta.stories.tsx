import type { Meta, StoryObj } from '@storybook/react-vite'
import MaterialMail from '~icons/material-symbols/mail'

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

export const CustomContent: Story = {
  args: {
    href: 'mailto:hi@lf.ds',
    title:
      'A headline that runs considerably longer than the default, '
      + 'to prove the inverted panel still wraps gracefully.',
    actionLabel: 'hi@lf.ds',
    icon: <MaterialMail className="size-6 flex-shrink-0 text-background" />,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Edge case — a long `title`, a custom `actionLabel` and a '
          + '`mail` icon swapped in for the default `arrow-outward`. '
          + 'The `h2` is `w-full lg:max-w-xl`, so long copy wraps '
          + 'inside its half of the panel.',
      },
    },
  },
}

export const Compact: Story = {
  args: {
    href: '#footer',
    className: 'mb-0 min-h-0 px-6 py-10 lg:p-10',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Size variant — `className` overrides compress the block '
          + '(`min-h-0` drops the `calc(100vh-12rem)` floor, smaller '
          + 'padding, `mb-0` clears the footer gap) for inline or '
          + 'docs use.',
      },
    },
  },
}

export const AfterSection: Story = {
  render: () => (
    <div className="flex flex-col gap-12">
      <section className="flex flex-col gap-3 px-6">
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
          {'// end of page'}
        </p>
        <p className="max-w-prose text-muted-foreground">
          The block is designed to close a page — here it follows an
          ordinary content section, exactly the hand-off the site
          makes before the footer.
        </p>
      </section>
      <ContactCTA
        href="#footer"
        className="mb-0 min-h-0 lg:p-16"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Composed page ending — the inverted CTA under a plain '
          + 'content section (compacted for the canvas via '
          + '`className`).',
      },
    },
  },
}
