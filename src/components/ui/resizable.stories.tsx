import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from './resizable'

const meta = {
  title: 'Components/Resizable',
  component: ResizablePanelGroup,
  parameters: {
    docs: {
      description: {
        component:
          'Resizable panels on `react-resizable-panels` v4: '
          + '`ResizablePanelGroup` takes `orientation`, `ResizablePanel` '
          + 'sizes via `defaultSize`/`minSize`/`maxSize` (numbers = px, '
          + 'strings = `%`/`px`/etc.), and `ResizableHandle` draws the '
          + 'separator — `withHandle` adds a grip.',
      },
    },
  },
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'Split axis of the panel group.',
    },
  },
  args: {
    orientation: 'horizontal',
  },
} satisfies Meta<typeof ResizablePanelGroup>

export default meta
type Story = StoryObj<typeof meta>

function PanelBox({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex h-full items-center justify-center p-6">
      <span className="font-semibold">{children}</span>
    </div>
  )
}

export const Horizontal: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <ResizablePanelGroup
        orientation="horizontal"
        className="min-h-48 w-full max-w-md rounded-lg border"
      >
        <ResizablePanel defaultSize="50%">
          <PanelBox>One</PanelBox>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize="50%">
          <PanelBox>Two</PanelBox>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
}

export const WithHandle: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <ResizablePanelGroup
        orientation="horizontal"
        className="min-h-48 w-full max-w-md rounded-lg border"
      >
        <ResizablePanel defaultSize="25%">
          <PanelBox>Sidebar</PanelBox>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize="75%">
          <PanelBox>Content</PanelBox>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '`withHandle` overlays a small grip on the 1px separator — '
          + 'useful when the hit area alone isn\'t discoverable.',
      },
    },
  },
}

export const Vertical: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <ResizablePanelGroup
        orientation="vertical"
        className="h-64 w-full max-w-md rounded-lg border"
      >
        <ResizablePanel defaultSize="25%">
          <PanelBox>Header</PanelBox>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize="75%">
          <PanelBox>Content</PanelBox>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '`orientation="vertical"` stacks panels; give the group a '
          + 'fixed height since the container has no intrinsic size.',
      },
    },
  },
}

export const ThreePanels: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <ResizablePanelGroup
        orientation="horizontal"
        className="min-h-48 w-full max-w-2xl rounded-lg border"
      >
        <ResizablePanel defaultSize="25%" minSize="15%">
          <PanelBox>Nav</PanelBox>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize="50%">
          <PanelBox>Content</PanelBox>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize="25%" minSize="15%">
          <PanelBox>Inspector</PanelBox>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Multiple `ResizableHandle`s in one group; `minSize` keeps '
          + 'the rails from collapsing entirely.',
      },
    },
  },
}
