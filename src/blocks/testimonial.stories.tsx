import type { Meta, StoryObj } from '@storybook/react-vite'

import { NewsletterSignup } from './newsletter-signup'
import { TestimonialCard, Testimonials } from './testimonial'

const meta = {
  title: 'Blocks/Testimonial',
  component: TestimonialCard,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '`TestimonialCard` — an `aug-surface` card (`figure`) with an '
          + 'accent `format-quote` glyph, the `quote` text and a '
          + '`figcaption` pairing a square `Avatar`/`AvatarFallback` '
          + 'inverted chip with mono `role // company` metadata. '
          + '`Testimonials` wraps an array of them in a responsive '
          + 'auto-fill grid under an optional `eyebrow`/`title` header.',
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
    quote: { control: 'text' },
    author: { control: 'text' },
    role: { control: 'text' },
    company: { control: 'text' },
    avatarSrc: { control: 'text' },
    avatarFallback: { control: 'text' },
  },
  args: {
    quote:
      'LFDS is the rare design system that commits to its bit — square '
      + 'corners, mono accents, orange on demand. Porting our marketing '
      + 'pages took an afternoon.',
    author: 'Ada Nakamura',
    role: 'Design Engineer',
    company: 'Hexlab',
  },
} satisfies Meta<typeof TestimonialCard>

export default meta
type Story = StoryObj<typeof meta>

export const Single: Story = {
  decorators: [
    Story => (
      <div className="mx-auto max-w-md">
        <Story />
      </div>
    ),
  ],
}

export const Grid: Story = {
  render: () => (
    <Testimonials
      eyebrow="// feedback"
      title="What the operators say"
      testimonials={[
        {
          quote:
            'LFDS is the rare design system that commits to its bit — '
            + 'square corners, mono accents, orange on demand.',
          author: 'Ada Nakamura',
          role: 'Design Engineer',
          company: 'Hexlab',
        },
        {
          quote:
            'The aug surfaces are the whole pitch. Load the stylesheet '
            + 'and every card, button and panel gets clipped corners '
            + 'for free.',
          author: 'Ravi Okafor',
          role: 'Frontend Lead',
          company: 'SIGNAL//NOISE',
        },
        {
          quote:
            'Blocks drop in like Lego — `StatsSection`, `FeatureGrid`, '
            + 'this testimonial grid. Our docs site shipped in a week.',
          author: 'Mara Voss',
          role: 'Founder',
          company: 'Kernel & Co',
        },
      ]}
    />
  ),
  parameters: {
    docs: {
      description: {
        story:
          '`Testimonials` takes `testimonials: Testimonial[]` and lays '
          + 'them out in a `repeat(auto-fill, minmax(18rem, 1fr))` grid '
          + '— any count reflows cleanly.',
      },
    },
  },
}

export const MinimalCard: Story = {
  args: {
    quote: 'Shipped the whole site in a weekend.',
    author: 'J. Doe',
    role: undefined,
    company: undefined,
  },
  decorators: [
    Story => (
      <div className="mx-auto max-w-md">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story:
          'Without `role`, `company` or `avatarSrc` the card renders '
          + 'quote + author only — the `figcaption` collapses to the '
          + 'initials fallback and the name.',
      },
    },
  },
}

export const LongQuote: Story = {
  args: {
    quote:
      'We evaluated half a dozen design systems before landing on '
      + 'LFDS. Most libraries give you a theme and a prayer; this one '
      + 'gives you an opinion — square corners, mono eyebrows, clipped '
      + 'aug surfaces — and then gets out of the way. Three months in, '
      + 'the marketing site, the docs and the dashboard all share the '
      + 'same primitives, and nobody on the team has had to write a '
      + 'single border-radius override.',
    author: 'Alexandra Konstantinov-Ribeiro',
    role: 'Principal Engineer, Platform Experience',
    company: 'Very Long Company Name Industries GmbH',
  },
  decorators: [
    Story => (
      <div className="mx-auto max-w-md">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story:
          'Edge case — an oversized `quote` plus long `author`/`role`/'
          + '`company` strings. `text-pretty` keeps the blockquote '
          + 'ragged-right tidy and the mono metadata wraps inside the '
          + 'figcaption.',
      },
    },
  },
}

export const IntoNewsletter: Story = {
  render: () => (
    <div className="flex flex-col">
      <Testimonials
        eyebrow="// feedback"
        title="What the operators say"
        className="pb-8 sm:pb-8"
        testimonials={[
          {
            quote:
              'LFDS is the rare design system that commits to its bit.',
            author: 'Ada Nakamura',
            role: 'Design Engineer',
            company: 'Hexlab',
          },
          {
            quote:
              'Blocks drop in like Lego — our docs site shipped in a week.',
            author: 'Mara Voss',
            role: 'Founder',
            company: 'Kernel & Co',
          },
        ]}
      />
      <div className="px-6 pb-16">
        <div className="mx-auto w-full max-w-5xl">
          <NewsletterSignup title="Get the next dispatch" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Composed section hand-off — the testimonial grid flowing '
          + 'into a `NewsletterSignup` panel inside the same `max-w-5xl` '
          + 'column, a classic social-proof → subscribe sequence.',
      },
    },
  },
}
