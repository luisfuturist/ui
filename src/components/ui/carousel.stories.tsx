import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './carousel'

const meta = {
  title: 'Components/Carousel',
  component: Carousel,
  parameters: {
    docs: {
      description: {
        component:
          'An Embla-powered carousel. `Carousel` accepts `opts` '
          + '(Embla options such as `loop`), `orientation` and `setApi`. '
          + '`CarouselItem` defaults to `basis-full` — use `basis-1/3` '
          + 'etc. to show several slides. `CarouselPrevious`/'
          + '`CarouselNext` are absolutely positioned buttons that '
          + 'disable themselves at the ends.',
      },
    },
  },
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'Scroll axis — forwarded to Embla as `axis`.',
    },
    opts: {
      control: false,
      description: 'Embla options object, e.g. `{ loop: true }`.',
    },
    setApi: {
      control: false,
      description: 'Receives the Embla `CarouselApi` instance.',
    },
    className: {
      control: false,
    },
    children: {
      control: false,
    },
  },
} satisfies Meta<typeof Carousel>

export default meta
type Story = StoryObj<typeof meta>

function Slide({ index }: { index: number }) {
  return (
    <div className="flex aspect-square items-center justify-center rounded-md border bg-muted/50">
      <span className="text-2xl font-semibold text-muted-foreground">
        {index + 1}
      </span>
    </div>
  )
}

export const Playground: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <Carousel className="w-full max-w-sm px-14">
        <CarouselContent>
          {Array.from({ length: 5 }, (_, i) => (
            <CarouselItem key={i} className="basis-1/3">
              <Slide index={i} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Three slides visible at a time (`basis-1/3`). The `px-14` '
          + 'wrapper leaves room for the `-left-12`/`-right-12` '
          + 'controls.',
      },
    },
  },
}

export const WithoutControls: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <Carousel className="w-full max-w-sm">
        <CarouselContent>
          {Array.from({ length: 5 }, (_, i) => (
            <CarouselItem key={i}>
              <Slide index={i} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Controls are opt-in — omit `CarouselPrevious`/'
          + '`CarouselNext` for a swipe/drag-only strip.',
      },
    },
  },
}

export const Loop: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <Carousel className="w-full max-w-sm px-14" opts={{ loop: true }}>
        <CarouselContent>
          {Array.from({ length: 5 }, (_, i) => (
            <CarouselItem key={i} className="basis-1/2">
              <Slide index={i} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '`opts={{ loop: true }}` wraps around at both ends — the '
          + 'previous/next buttons never disable.',
      },
    },
  },
}

export const Vertical: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <Carousel
        orientation="vertical"
        className="w-full max-w-xs py-14"
      >
        <CarouselContent className="h-64">
          {Array.from({ length: 5 }, (_, i) => (
            <CarouselItem key={i} className="basis-1/2">
              <Slide index={i} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '`orientation="vertical"` swaps the Embla axis to `y`. Give '
          + '`CarouselContent` a fixed height and keep `py-*` room for '
          + 'the rotated controls.',
      },
    },
  },
}

export const SingleSlide: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <Carousel className="w-full max-w-xs px-14">
        <CarouselContent>
          <CarouselItem>
            <Slide index={0} />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Edge case: with a single slide both controls render '
          + 'disabled — `canScrollPrev`/`canScrollNext` are `false`.',
      },
    },
  },
}
