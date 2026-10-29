import type { Meta, StoryObj } from '@storybook/react-vite'
import MaterialDocumentSearch from '~icons/material-symbols/document-search'
import MaterialNotificationsOff from '~icons/material-symbols/notifications-off'

import { Button } from './button'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from './empty'
import { Input } from './input'

const meta = {
  title: 'Components/Empty',
  component: Empty,
  parameters: {
    docs: {
      description: {
        component:
          'An empty-state scaffold: `EmptyHeader` holds `EmptyMedia` '
          + '(`variant="default" | "icon"`), `EmptyTitle` and '
          + '`EmptyDescription`; `EmptyContent` below fits actions or '
          + 'a small input. `Empty` itself is a centered dashed-border '
          + 'column. `EmptyMedia variant="icon"` shares the LFDS icon '
          + 'chip with `ItemMedia` — card surface, foreground keyline, '
          + 'clipped top-right/bottom-left corners — one size up.',
      },
    },
  },
  argTypes: {
    className: {
      control: false,
    },
    children: {
      control: false,
    },
  },
} satisfies Meta<typeof Empty>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <Empty className="w-[28rem] border">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <MaterialDocumentSearch />
          </EmptyMedia>
          <EmptyTitle>No expeditions found</EmptyTitle>
          <EmptyDescription>
            Try a different route name or widen the search radius.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    </div>
  ),
}

export const SearchResults: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <Empty className="w-[28rem] border">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <MaterialDocumentSearch />
          </EmptyMedia>
          <EmptyTitle>No results for “blue ridge”</EmptyTitle>
          <EmptyDescription>
            Check the spelling or try broader keywords. You can also
            browse the
            {' '}
            <a href="#atlas">expedition atlas</a>
            .
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <div className="flex w-full max-w-xs gap-2">
            <Input placeholder="Search expeditions…" />
            <Button size="sm">
              Search
            </Button>
          </div>
        </EmptyContent>
      </Empty>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'A realistic search-empty state — note `EmptyDescription` '
          + 'auto-styles inline anchors via `[&>a]` selectors.',
      },
    },
  },
}

export const NoNotifications: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <Empty className="w-[28rem] border">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <MaterialNotificationsOff />
          </EmptyMedia>
          <EmptyTitle>No notifications</EmptyTitle>
          <EmptyDescription>
            You are all caught up. Carrier pigeons are resting.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              View archive
            </Button>
            <Button size="sm">
              Notification settings
            </Button>
          </div>
        </EmptyContent>
      </Empty>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '`EmptyContent` also suits a pair of actions — secondary '
          + 'and primary buttons side by side.',
      },
    },
  },
}

export const TitleOnly: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <Empty className="w-80 border">
        <EmptyHeader>
          <EmptyTitle>Nothing here yet</EmptyTitle>
        </EmptyHeader>
      </Empty>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Edge case: every part except `Empty` itself is optional — '
          + 'a bare `EmptyTitle` still centers correctly.',
      },
    },
  },
}
