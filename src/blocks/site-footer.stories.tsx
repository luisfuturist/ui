import type { Meta, StoryObj } from '@storybook/react-vite'
import MaterialAlternateEmail from '~icons/material-symbols/alternate-email'
import MaterialLanguage from '~icons/material-symbols/language'
import MaterialMail from '~icons/material-symbols/mail'

import { ContactCTA } from './contact-cta'
import { SiteFooter } from './site-footer'

const meta = {
  title: 'Blocks/SiteFooter',
  component: SiteFooter,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A bordered-top page footer with `columns` of grouped links '
          + '(`{ title, links[] }`), a `socials` row of icon links and a '
          + '`copyright` line. All three sections are optional — pass '
          + 'only `copyright` for a minimal bar.',
      },
    },
  },
  argTypes: {
    columns: { control: false },
    socials: { control: false },
    copyright: { control: 'text' },
  },
} satisfies Meta<typeof SiteFooter>

export default meta
type Story = StoryObj<typeof meta>

const columns = [
  {
    title: 'Navigation',
    links: [
      { label: 'README', href: '#readme' },
      { label: 'Projects', href: '#projects' },
      { label: 'Blog', href: '#blog' },
    ],
  },
  {
    title: 'Components',
    links: [
      { label: 'Forms', href: '#forms' },
      { label: 'Overlays', href: '#overlays' },
      { label: 'Data display', href: '#data' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Storybook', href: '#storybook' },
      { label: 'Source', href: '#source' },
    ],
  },
]

const socials = [
  { label: 'GitHub', href: 'https://github.com/luisfuturist', icon: <MaterialLanguage className="size-4" /> },
  { label: '@luisfuturist', href: 'https://x.com/luisfuturist', icon: <MaterialAlternateEmail className="size-4" /> },
  { label: 'Email', href: 'mailto:luisfuturist@gmail.com', icon: <MaterialMail className="size-4" /> },
]

export const Default: Story = {
  args: {
    columns,
    socials,
    copyright: '© 2026 Luis Emidio — built with LFDS.',
  },
}

export const Minimal: Story = {
  args: {
    copyright: '© 2026 Luis Emidio',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Without `columns` or `socials` the footer collapses to a '
          + 'single bordered bar with the `copyright` line.',
      },
    },
  },
}

export const ColumnsOnly: Story = {
  args: {
    columns,
    socials: [],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Link columns with no `socials` — the bottom bar keeps the '
          + 'default copyright line but drops the icon row.',
      },
    },
  },
}

export const ManyColumns: Story = {
  args: {
    columns: [
      ...columns,
      {
        title: 'Company',
        links: [
          { label: 'About', href: '#' },
          { label: 'Careers', href: '#' },
          { label: 'Press kit', href: '#' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Privacy', href: '#' },
          { label: 'Terms', href: '#' },
        ],
      },
    ],
    socials,
    copyright: '© 2026 Luis Emidio — built with LFDS.',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Edge case — five `columns`. The grid is `grid-cols-2 '
          + 'sm:grid-cols-3 md:grid-cols-4`, so extras wrap to a '
          + 'second row on desktop.',
      },
    },
  },
}

export const PageEnding: Story = {
  render: () => (
    <div className="flex flex-col">
      <ContactCTA
        href="#footer"
        className="mb-0 min-h-0 lg:p-16"
      />
      <SiteFooter
        columns={columns}
        socials={socials}
        copyright="© 2026 Luis Emidio — built with LFDS."
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Composed page bottom — the inverted `ContactCTA` '
          + '(compacted with `className`) handing straight into the '
          + 'bordered-top footer, the site\'s actual closing '
          + 'sequence.',
      },
    },
  },
}
