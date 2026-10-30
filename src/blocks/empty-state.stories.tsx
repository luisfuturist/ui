import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import MaterialCloudOff from '~icons/material-symbols/cloud-off'

import { EmptyData, EmptyError, EmptySearch } from './empty-state'
import { SearchBar } from './search-bar'

const meta = {
  title: 'Blocks/EmptyState',
  component: EmptySearch,
  parameters: {
    docs: {
      description: {
        component:
          'Opinionated empty-state presets composed on the `Empty` '
          + 'primitives: `EmptySearch` (`search-off` icon, outline '
          + '"Clear search" action), `EmptyData` (`inbox` icon, '
          + 'primary "Create item" action) and `EmptyError` (`error` '
          + 'icon, "Try again" retry action). `icon`, `title`, '
          + '`description`, `actionLabel`, `actionIcon` and `onAction` '
          + 'are all overridable — pass `null` to hide a part.',
      },
    },
  },
  argTypes: {
    icon: { control: false },
    title: { control: 'text' },
    description: { control: 'text' },
    actionLabel: { control: 'text' },
    actionIcon: { control: false },
    onAction: { control: false },
  },
} satisfies Meta<typeof EmptySearch>

export default meta
type Story = StoryObj<typeof meta>

export const Search: Story = {
  render: args => (
    <div className="flex items-center justify-center p-8">
      <EmptySearch {...args} className="w-[28rem]" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Search-empty preset — `search-off` media chip and an '
          + 'outline "Clear search" action wired to `onAction`.',
      },
    },
  },
}

export const Data: Story = {
  render: args => (
    <div className="flex items-center justify-center p-8">
      <EmptyData {...args} className="w-[28rem]" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Collection-empty preset — `inbox` media chip and a primary '
          + '"Create item" action with the `add` icon.',
      },
    },
  },
}

export const Error: Story = {
  render: args => (
    <div className="flex items-center justify-center p-8">
      <EmptyError {...args} className="w-[28rem]" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Error preset — `error` media chip and an outline "Try '
          + 'again" retry action with the `refresh` icon.',
      },
    },
  },
}

export const Minimal: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <EmptySearch
        icon={null}
        title="No results found"
        description={null}
        actionLabel={null}
        className="w-[28rem]"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Every part is nullable — `icon`, `description` and '
          + '`actionLabel` set to `null` leave a bare bordered '
          + '`Empty` with just the title.',
      },
    },
  },
}

export const CustomContent: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <EmptyError
        icon={<MaterialCloudOff />}
        title="Connection lost"
        description="The sync daemon can't reach the relay. Check your network and retry."
        actionLabel="Reconnect"
        className="w-[28rem]"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Presets are defaults, not cages — `EmptyError` re-skinned '
          + 'with a `cloud-off` icon and offline copy for an '
          + 'offline/sync-failure state.',
      },
    },
  },
}

export const ResultsPanel: Story = {
  render: function Render() {
    const [query, setQuery] = useState('zeta')

    return (
      <div className="flex items-center justify-center p-8">
        <div className="flex w-full max-w-lg flex-col gap-4">
          <SearchBar
            shortcut={null}
            placeholder="Filter deployments…"
            value={query}
            onValueChange={setQuery}
          />
          <EmptySearch
            title={`No deployments match "${query}"`}
            description="Try a different name, or clear the filter."
            onAction={() => setQuery('')}
          />
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Composed search-results panel — an input-mode `SearchBar` '
          + 'feeding an `EmptySearch` whose "Clear search" action '
          + 'resets the query.',
      },
    },
  },
}
