import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  ErrorPage404,
  ErrorPage500,
  ErrorPageMaintenance,
} from './error-page-presets'
import { SiteFooter } from './site-footer'
import { SiteHeader } from './site-header'

const meta = {
  title: 'Blocks/ErrorPagePresets',
  component: ErrorPage404,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Thin presets over `ErrorPage` with fixed status codes, '
          + 'headings, default copy and a link action: `ErrorPage404` '
          + '(`[return home]`), `ErrorPage500` (`[return home]`) and '
          + '`ErrorPageMaintenance` (`[try again]`). Every prop still '
          + 'passes through to `ErrorPage`, so `lines`, `action` and '
          + 'even `code`/`heading` remain overridable.',
      },
    },
  },
} satisfies Meta<typeof ErrorPage404>

export default meta
type Story = StoryObj<typeof meta>

export const NotFound: Story = {
  render: args => <ErrorPage404 {...args} />,
}

export const ServerError: Story = {
  render: () => <ErrorPage500 />,
}

export const Maintenance: Story = {
  render: () => <ErrorPageMaintenance />,
}

export const CustomCopy: Story = {
  render: () => (
    <ErrorPage404
      code="410"
      heading="gone"
      lines={[
        'This resource was removed on purpose.',
        'No redirect, no archive — it is simply gone.',
      ]}
    />
  ),
  parameters: {
    docs: {
      description: {
        story:
          '`code` and `heading` remain ordinary props — the 404 '
          + 'preset re-purposed as a 410 "gone" page with custom '
          + '`lines` and no `action`.',
      },
    },
  },
}

export const FullPage: Story = {
  render: () => (
    <div className="flex min-h-screen flex-col">
      <SiteHeader
        links={[{ label: 'Docs', href: '#' }, { label: 'Blocks', href: '#' }]}
        className="static"
      />
      <main className="flex-1">
        <ErrorPage404 className="min-h-0 py-12" />
      </main>
      <SiteFooter copyright="© LFDS" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Composed page shell — `SiteHeader` + `ErrorPage404` + '
          + '`SiteFooter`, the chrome a real 404 route renders '
          + 'inside. `className` on each piece compacts them for the '
          + 'docs canvas.',
      },
    },
  },
}
