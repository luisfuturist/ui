import type { Meta, StoryObj } from '@storybook/react-vite'

import { Skeleton } from './skeleton'

const meta = {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    docs: {
      description: {
        component:
          'A pulsing placeholder block (`animate-pulse bg-accent '
          + 'rounded-md`). Shape it entirely through `className` — '
          + '`rounded-full` for avatars, fixed `h-*`/`w-*` for text '
          + 'lines and media.',
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
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <div className="flex w-72 items-center gap-4">
        <Skeleton className="size-10 rounded-full" />
        <div className="grid flex-1 gap-2">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>
    </div>
  ),
}

export const Shapes: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-4 p-8">
      <Skeleton className="size-10 rounded-full" />
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-4 w-40" />
      <Skeleton className="size-12 rounded-md" />
      <Skeleton className="h-8 w-16 rounded-full" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Circles, lines and blocks — every shape is the same '
          + 'component with different `rounded-*`/`size-*` classes.',
      },
    },
  },
}

export const CommentThread: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <div className="grid w-96 gap-6">
        {[0, 1].map(i => (
          <div key={i} className="flex gap-3">
            <Skeleton className="size-8 shrink-0 rounded-full" />
            <div className="grid flex-1 gap-2">
              <Skeleton className="h-3.5 w-24" />
              <Skeleton className="h-3.5 w-full" />
              <Skeleton className="h-3.5 w-2/3" />
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'A realistic composition: the classic avatar + lines comment '
          + 'skeleton, repeated for a thread.',
      },
    },
  },
}

export const CardSkeleton: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <div className="w-72 overflow-hidden rounded-xl border">
        <Skeleton className="aspect-video w-full rounded-none" />
        <div className="grid gap-2 p-4">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-1/2" />
          <div className="mt-2 flex gap-2">
            <Skeleton className="h-8 w-20" />
            <Skeleton className="h-8 w-20" />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'A card-shaped loading state — media block, title/body '
          + 'lines and action buttons.',
      },
    },
  },
}
