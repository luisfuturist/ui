import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '../components/ui/button'
import { ErrorPage } from './error-page'

const meta = {
  title: 'Blocks/ErrorPage',
  component: ErrorPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Generic error page block — big `font-flex` status code, '
          + 'optional `<heading>` suffix, message lines, and an '
          + '`action` slot for a return link. Matches the website\'s '
          + '404 page markup.',
      },
    },
  },
} satisfies Meta<typeof ErrorPage>

export default meta
type Story = StoryObj<typeof meta>

export const NotFound: Story = {
  args: {
    code: '404',
    heading: 'not found',
    lines: [
      'The page you are looking for could not be found.',
      'It may have been moved, deleted, or never existed.',
    ],
    action: (
      <a
        href="/"
        className="w-fit font-mono text-sm text-foreground no-underline uppercase transition-opacity duration-300 hover:text-link-primary-hover"
      >
        [return home]
      </a>
    ),
  },
}

export const ServerError: Story = {
  args: {
    code: '500',
    heading: 'server error',
    lines: ['Something went wrong on our end.', 'Try again in a moment.'],
    action: (
      <a
        href="/"
        className="w-fit font-mono text-sm text-foreground no-underline uppercase transition-opacity duration-300 hover:text-link-primary-hover"
      >
        [return home]
      </a>
    ),
  },
}

export const CodeOnly: Story = {
  args: {
    code: '404',
    heading: undefined,
    lines: [],
    action: undefined,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Only `code` is required — no `<heading>` suffix, no '
          + 'message lines, no action. The giant `font-flex` numeral '
          + 'carries the page alone.',
      },
    },
  },
}

export const LongLines: Story = {
  args: {
    code: '403',
    heading: 'forbidden',
    lines: [
      'You do not have permission to view this resource.',
      'It may belong to another workspace or require a higher role.',
      'Contact the owner if you believe this is a mistake.',
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Edge case — three message `lines` joined by `<br>`s, and '
          + 'no `action` at all. The copy column grows without '
          + 'breaking the centered layout.',
      },
    },
  },
}

export const ButtonAction: Story = {
  args: {
    code: '418',
    heading: 'teapot',
    lines: ['The requested entity body is short and stout.'],
    action: (
      <>
        <Button variant="augmented">Brew again</Button>
        <a
          href="/"
          className="w-fit font-mono text-sm text-foreground no-underline uppercase transition-opacity duration-300 hover:text-link-primary-hover"
        >
          [return home]
        </a>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          'The `action` slot accepts any node — here an augmented '
          + '`Button` stacked over the bracketed return link inside '
          + 'the `flex-col gap-6` container.',
      },
    },
  },
}
