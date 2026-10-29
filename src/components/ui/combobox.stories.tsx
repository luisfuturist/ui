import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from './combobox'

const meta = {
  title: 'Components/Combobox',
  component: Combobox,
  parameters: {
    docs: {
      description: {
        component:
          'A searchable select built on `@base-ui/react` `Combobox`. '
          + '`ComboboxInput` filters the `items` given to the root; '
          + '`ComboboxList` takes a function child that maps each '
          + '(filtered) item to `ComboboxItem`, and supports grouped '
          + 'data via `ComboboxGroup` + `ComboboxCollection`. '
          + '`multiple` + `ComboboxChips`/`ComboboxChip` renders a '
          + 'multi-select token input anchored with '
          + '`useComboboxAnchor()`.',
      },
    },
  },
} satisfies Meta<typeof Combobox>

export default meta
type Story = StoryObj<typeof meta>

const frameworks = [
  'Next.js',
  'Remix',
  'Astro',
  'SvelteKit',
  'Nuxt',
  'TanStack Start',
]

export const Default: Story = {
  render: () => (
    <div className="flex items-start justify-center p-8 pb-64">
      <Combobox items={frameworks}>
        <ComboboxInput
          placeholder="Select a framework"
          showClear
          className="w-72"
        />
        <ComboboxContent>
          <ComboboxEmpty>No frameworks found.</ComboboxEmpty>
          <ComboboxList>
            {(item: string) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Typing filters `items`; `showClear` swaps the chevron '
          + 'trigger for an ✕ once a value is selected.',
      },
    },
  },
}

const groupedFrameworks = [
  { label: 'React', items: ['Next.js', 'Remix', 'TanStack Start'] },
  { label: 'Vue', items: ['Nuxt', 'Quasar'] },
  { label: 'Other', items: ['Astro', 'SvelteKit'] },
]

export const Grouped: Story = {
  render: () => (
    <div className="flex items-start justify-center p-8 pb-64">
      <Combobox items={groupedFrameworks}>
        <ComboboxInput placeholder="Select a framework" className="w-72" />
        <ComboboxContent>
          <ComboboxEmpty>No frameworks found.</ComboboxEmpty>
          <ComboboxList>
            {(group: { label: string, items: string[] }) => (
              <ComboboxGroup key={group.label} items={group.items}>
                <ComboboxLabel>{group.label}</ComboboxLabel>
                <ComboboxCollection>
                  {(item: string) => (
                    <ComboboxItem key={item} value={item}>
                      {item}
                    </ComboboxItem>
                  )}
                </ComboboxCollection>
              </ComboboxGroup>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Grouped data is `{ label, items }[]` on the root; the '
          + '`ComboboxList` child then receives each group and renders '
          + '`ComboboxGroup` + `ComboboxLabel` + `ComboboxCollection`.',
      },
    },
  },
}

export const Controlled: Story = {
  render: function Render() {
    const [value, setValue] = useState<string | null>(null)

    return (
      <div className="flex flex-col items-center justify-center gap-4 p-8 pb-64">
        <Combobox
          items={frameworks}
          value={value}
          onValueChange={setValue}
        >
          <ComboboxInput placeholder="Pick one" showClear className="w-72" />
          <ComboboxContent>
            <ComboboxEmpty>No frameworks found.</ComboboxEmpty>
            <ComboboxList>
              {(item: string) => (
                <ComboboxItem key={item} value={item}>
                  {item}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
        <p className="text-sm text-muted-foreground">
          Selected:
          {' '}
          {value ?? '—'}
        </p>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          '`value`/`onValueChange` control the selection — `null` '
          + 'means “no selection” and re-shows the placeholder.',
      },
    },
  },
}

const tags = ['react', 'typescript', 'tailwind', 'storybook', 'vite', 'radix']

export const MultipleWithChips: Story = {
  render: function Render() {
    const anchor = useComboboxAnchor()

    return (
      <div className="flex items-start justify-center p-8 pb-64">
        <Combobox
          multiple
          items={tags}
          defaultValue={['react', 'storybook']}
        >
          <ComboboxChips ref={anchor} className="w-96">
            <ComboboxValue>
              {(selected: string[]) => (
                <>
                  {selected.map(tag => (
                    <ComboboxChip key={tag}>{tag}</ComboboxChip>
                  ))}
                  <ComboboxChipsInput placeholder="Add tag…" />
                </>
              )}
            </ComboboxValue>
          </ComboboxChips>
          <ComboboxContent anchor={anchor}>
            <ComboboxEmpty>No tags found.</ComboboxEmpty>
            <ComboboxList>
              {(item: string) => (
                <ComboboxItem key={item} value={item}>
                  {item}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'With `multiple`, `ComboboxValue` yields the selected array — '
          + 'render one `ComboboxChip` per tag and keep '
          + '`ComboboxChipsInput` last. `useComboboxAnchor()` points '
          + 'the popup at the chips box instead of the input.',
      },
    },
  },
}
