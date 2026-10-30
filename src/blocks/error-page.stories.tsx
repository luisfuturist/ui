import type { Meta, StoryObj } from '@storybook/react-vite'

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
