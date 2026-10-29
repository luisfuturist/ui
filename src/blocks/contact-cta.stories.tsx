import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '../components/ui/button'
import { ContactCTA } from './contact-cta'

const meta = {
  title: 'Blocks/ContactCTA',
  component: ContactCTA,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A centered call-to-action panel — `title`, muted '
          + '`description` and a button row fed by the `primaryAction` / '
          + '`secondaryAction` slots. Pass `Button`s (or anything else) '
          + 'through the slots to keep full control over styling.',
      },
    },
  },
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    primaryAction: { control: false },
    secondaryAction: { control: false },
  },
} satisfies Meta<typeof ContactCTA>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => (
    <div className="p-6 sm:p-12">
      <ContactCTA {...args} />
    </div>
  ),
  args: {
    title: 'Connect with me now—Let\'s UDP or TCP.',
    description:
      'You\'ll find me on Discord or any social network mentioned '
      + 'here; I\'ll welcome your message with open code.',
    primaryAction: (
      <Button>
        Contact me
      </Button>
    ),
    secondaryAction: (
      <Button variant="outline">
        See projects
      </Button>
    ),
  },
}

export const SingleAction: Story = {
  render: args => (
    <div className="p-6 sm:p-12">
      <ContactCTA {...args} />
    </div>
  ),
  args: {
    title: 'Ready when you are.',
    description: 'One button, one destination.',
    primaryAction: (
      <Button>
        Get in touch
      </Button>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          '`secondaryAction` is optional — omitting it leaves a single '
          + 'centered primary action.',
      },
    },
  },
}
