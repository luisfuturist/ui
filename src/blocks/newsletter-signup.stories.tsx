import type { Meta, StoryObj } from '@storybook/react-vite'

import { NewsletterSignup } from './newsletter-signup'
import { SiteFooter } from './site-footer'

const meta = {
  title: 'Blocks/NewsletterSignup',
  component: NewsletterSignup,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A clipped-corner `aug-surface` panel with a mono `eyebrow`, a '
          + '`font-display` `title`, an optional `description` and an '
          + 'email `Input` + augmented `Button` row. `onSubmit` receives '
          + 'the typed email; leave `submitted` uncontrolled and the block '
          + 'swaps the form for the `successMessage` line, or drive the '
          + 'success state yourself via `submitted`.',
      },
    },
  },
  decorators: [
    Story => (
      <div className="bg-background p-8 sm:p-12">
        <div className="mx-auto max-w-2xl">
          <Story />
        </div>
      </div>
    ),
  ],
  argTypes: {
    eyebrow: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
    placeholder: { control: 'text' },
    actionLabel: { control: 'text' },
    successMessage: { control: 'text' },
    submitted: { control: 'boolean' },
    onSubmit: { control: false },
  },
  args: {
    eyebrow: '// transmission',
    title: 'Intercept the signal',
    description:
      'One dispatch per cycle — components, blocks and design-token '
      + 'drops from the LFDS pipeline. No noise.',
  },
} satisfies Meta<typeof NewsletterSignup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Success: Story = {
  args: {
    submitted: true,
    successMessage: 'Signal received — check your inbox to confirm.',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Pass `submitted` to pin the success state — the form is '
          + 'replaced by a mono confirmation line with an accent '
          + '`check-circle` icon.',
      },
    },
  },
}

export const Minimal: Story = {
  args: {
    eyebrow: null,
    title: 'Stay in the loop',
    description: null,
  },
  parameters: {
    docs: {
      description: {
        story:
          'With `eyebrow` and `description` unset the block collapses '
          + 'to just the `title` and the email row — every prop above '
          + 'the form is optional.',
      },
    },
  },
}

export const LongContent: Story = {
  args: {
    eyebrow: '// a very long eyebrow that keeps going past the usual two-word burst',
    title:
      'A headline long enough to wrap across several lines and prove '
      + 'the `text-balance` display title holds together',
    description:
      'An equally generous lede — the kind of paragraph a marketing '
      + 'page actually ships, spanning two or three lines on desktop '
      + 'so the muted body copy can be checked against the clipped '
      + 'card chrome at realistic line lengths.',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Edge case — long `eyebrow`, `title` and `description` copy. '
          + '`text-balance` on the title and description keeps ragged '
          + 'edges tidy inside the `max-w-2xl` decorator.',
      },
    },
  },
}

export const PageBottom: Story = {
  render: args => (
    <div className="flex flex-col gap-12">
      <NewsletterSignup {...args} />
      <SiteFooter
        columns={[
          {
            title: 'Product',
            links: [
              { label: 'Components', href: '#' },
              { label: 'Blocks', href: '#' },
            ],
          },
        ]}
        copyright="© LFDS"
      />
    </div>
  ),
  decorators: [
    Story => (
      <div className="bg-background p-8 sm:p-12">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story:
          'Composed page ending — the signup panel stacked directly '
          + 'above a minimal `SiteFooter`, the way the block is meant '
          + 'to sit at the bottom of a marketing page.',
      },
    },
  },
}
