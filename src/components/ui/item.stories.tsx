import type { Meta, StoryObj } from '@storybook/react-vite'
import { ChevronDown, FileText, Music, Settings, Star } from 'lucide-react'

import { Button } from './button'
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from './item'

const meta = {
  title: 'Components/Item',
  component: Item,
  parameters: {
    docs: {
      description: {
        component:
          'A flexible list-row primitive. `Item` accepts '
          + '`variant="default" | "outline" | "muted"`, `size="default" '
          + '| "sm"` and `asChild`. Compose `ItemMedia` (`default` / '
          + '`icon` / `image`), `ItemContent` + `ItemTitle` + '
          + '`ItemDescription`, and `ItemActions`. `ItemGroup` and '
          + '`ItemSeparator` assemble lists.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['default', 'outline', 'muted'],
      description: 'Surface treatment for the row.',
    },
    size: {
      control: 'radio',
      options: ['default', 'sm'],
      description: 'Padding/gap preset.',
    },
    asChild: {
      control: false,
      description: 'Merge props onto the child element via `Slot`.',
    },
    className: {
      control: false,
    },
    children: {
      control: false,
    },
  },
  args: {
    variant: 'default',
    size: 'default',
  },
} satisfies Meta<typeof Item>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => (
    <div className="flex items-center justify-center p-8">
      <Item className="w-96" {...args}>
        <ItemMedia variant="icon">
          <FileText />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Field notes — day 12</ItemTitle>
          <ItemDescription>
            Sketches of the ridge line and a rubbing of the marker
            stone found at checkpoint seven.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">Open</Button>
        </ItemActions>
      </Item>
    </div>
  ),
}

export const VariantMatrix: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <div className="grid grid-cols-[auto_repeat(3,auto)] items-center gap-x-6 gap-y-4">
        <span className="text-sm text-muted-foreground" />
        <span className="text-sm font-medium">Default</span>
        <span className="text-sm font-medium">Outline</span>
        <span className="text-sm font-medium">Muted</span>

        <span className="text-sm text-muted-foreground">size=default</span>
        {(['default', 'outline', 'muted'] as const).map(variant => (
          <Item key={variant} variant={variant} className="w-48">
            <ItemContent>
              <ItemTitle>Row</ItemTitle>
            </ItemContent>
          </Item>
        ))}

        <span className="text-sm text-muted-foreground">size=sm</span>
        {(['default', 'outline', 'muted'] as const).map(variant => (
          <Item key={variant} variant={variant} size="sm" className="w-48">
            <ItemContent>
              <ItemTitle>Row</ItemTitle>
            </ItemContent>
          </Item>
        ))}
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All `variant` × `size` combinations side by side.',
      },
    },
  },
}

export const AsChildLink: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <Item asChild variant="outline" className="w-96">
        <a href="#settings">
          <ItemMedia variant="icon">
            <Settings />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Expedition settings</ItemTitle>
            <ItemDescription>
              Rations, routes and roster — rendered as an anchor.
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <ChevronDown className="size-4 -rotate-90 text-muted-foreground" />
          </ItemActions>
        </a>
      </Item>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'With `asChild`, the whole row becomes the anchor — the '
          + '`[a]:hover:bg-accent/50` rule on the variant supplies the '
          + 'hover state.',
      },
    },
  },
}

export const Group: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <ItemGroup className="w-96 rounded-md border">
        <Item size="sm">
          <ItemMedia variant="icon">
            <FileText />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>manifest.md</ItemTitle>
          </ItemContent>
          <ItemActions>
            <span className="text-xs text-muted-foreground">2 KB</span>
          </ItemActions>
        </Item>
        <ItemSeparator />
        <Item size="sm">
          <ItemMedia variant="icon">
            <Music />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>campfire-tunes.ogg</ItemTitle>
          </ItemContent>
          <ItemActions>
            <span className="text-xs text-muted-foreground">4 MB</span>
          </ItemActions>
        </Item>
        <ItemSeparator />
        <Item size="sm">
          <ItemMedia variant="icon">
            <Star />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>star-chart.svg</ItemTitle>
          </ItemContent>
          <ItemActions>
            <span className="text-xs text-muted-foreground">88 KB</span>
          </ItemActions>
        </Item>
      </ItemGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '`ItemGroup` wraps rows in `role="list"`; `ItemSeparator` '
          + 'drops hairlines between them.',
      },
    },
  },
}

export const LongDescription: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <Item variant="outline" className="w-80">
        <ItemMedia variant="icon">
          <FileText />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Quartermaster memo</ItemTitle>
          <ItemDescription>
            Due to the unusual snowfall recorded at the third checkpoint
            over the past fortnight, all expeditions departing after the
            full moon must carry additional insulated tarps, spare
            kindling, and twice the usual allocation of signal flares,
            per standing order seven.
          </ItemDescription>
        </ItemContent>
      </Item>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Edge case: `ItemDescription` clamps to two lines '
          + '(`line-clamp-2`) and `ItemMedia` shifts up to align with '
          + 'the first text line.',
      },
    },
  },
}
