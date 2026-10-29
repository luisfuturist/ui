import type { Meta, StoryObj } from '@storybook/react-vite'

import { AspectRatio } from './aspect-ratio'

const meta = {
  title: 'Components/AspectRatio',
  component: AspectRatio,
  parameters: {
    docs: {
      description: {
        component:
          'A thin wrapper over `radix-ui`\'s `AspectRatio.Root` that '
          + 'maintains a fixed width/height `ratio` for its single '
          + 'child. The child fills the box, so give it `size-full` '
          + 'classes (or `object-cover` for media).',
      },
    },
  },
  argTypes: {
    ratio: {
      control: 'number',
      description: 'Width / height ratio to maintain (e.g. `16 / 9`).',
    },
    className: {
      control: false,
    },
    children: {
      control: false,
    },
  },
  args: {
    ratio: 16 / 9,
  },
} satisfies Meta<typeof AspectRatio>

export default meta
type Story = StoryObj<typeof meta>

function Placeholder({ label }: { label: string }) {
  return (
    <div className="flex size-full items-center justify-center rounded-md border border-foreground bg-background-secondary">
      <span className="text-sm font-medium text-foreground">
        {label}
      </span>
    </div>
  )
}

export const Playground: Story = {
  render: args => (
    <div className="flex items-center justify-center p-8">
      <div className="w-96">
        <AspectRatio {...args}>
          <Placeholder label="16 : 9" />
        </AspectRatio>
      </div>
    </div>
  ),
}

export const CommonRatios: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <div className="grid w-full max-w-lg grid-cols-3 items-end gap-4">
        <AspectRatio ratio={16 / 9}>
          <Placeholder label="16 : 9" />
        </AspectRatio>
        <AspectRatio ratio={1}>
          <Placeholder label="1 : 1" />
        </AspectRatio>
        <AspectRatio ratio={4 / 3}>
          <Placeholder label="4 : 3" />
        </AspectRatio>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Common media ratios. Each box keeps its proportion while the '
          + 'grid columns size it — the child div uses `size-full` to '
          + 'fill the ratio box.',
      },
    },
  },
}

export const MediaFrame: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <figure className="w-80">
        <AspectRatio ratio={3 / 2} className="overflow-hidden rounded-lg">
          <div className="flex size-full items-center justify-center border border-foreground bg-background-secondary">
            <span className="text-sm text-foreground">
              Cover frame 3 : 2
            </span>
          </div>
        </AspectRatio>
        <figcaption className="mt-2 text-sm text-muted-foreground">
          Expedition campsite at dusk — placeholder media.
        </figcaption>
      </figure>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'A realistic composition: `AspectRatio` frames cover media '
          + 'inside a `figure`, with `overflow-hidden` + `rounded-lg` '
          + 'to clip the content to the card shape.',
      },
    },
  },
}

export const TallRatio: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <div className="w-40">
        <AspectRatio ratio={9 / 16}>
          <Placeholder label="9 : 16" />
        </AspectRatio>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Edge case: portrait ratios below `1` work the same way — '
          + 'useful for phone screenshots or vertical video embeds.',
      },
    },
  },
}
