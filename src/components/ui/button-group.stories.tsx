import type { Meta, StoryObj } from '@storybook/react-vite'
import { Copy, Minus, Plus } from 'lucide-react'

import { Button } from './button'
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from './button-group'
import { Input } from './input'

const meta = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    docs: {
      description: {
        component:
          'Joins sibling buttons, text segments and inputs into a single '
          + 'control by collapsing adjacent borders and radii. '
          + '`orientation="horizontal" | "vertical"` controls the join '
          + 'direction; `ButtonGroupText` renders a muted label segment '
          + '(or any element via `asChild`) and `ButtonGroupSeparator` '
          + 'draws a divider between items. Buttons inside a group '
          + 'typically use an outline-style `className` since this '
          + 'library\'s `variant`s are unstyled.',
      },
    },
  },
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'Direction the items are joined in.',
    },
    className: {
      control: false,
    },
    children: {
      control: false,
    },
  },
  args: {
    orientation: 'horizontal',
  },
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

const borderedButton = 'border bg-background px-4 h-9 text-sm'

export const Playground: Story = {
  render: args => (
    <div className="flex items-center justify-center p-8">
      <ButtonGroup {...args}>
        <Button className={borderedButton}>Day</Button>
        <Button className={borderedButton}>Week</Button>
        <Button className={borderedButton}>Month</Button>
      </ButtonGroup>
    </div>
  ),
}

export const WithText: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <div className="flex flex-col items-center gap-6">
        <ButtonGroup>
          <ButtonGroupText>https://</ButtonGroupText>
          <Input placeholder="example.com" className="h-9 w-48" />
          <Button className={borderedButton}>Visit</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button className={borderedButton} aria-label="Decrease">
            <Minus />
          </Button>
          <ButtonGroupText>3</ButtonGroupText>
          <Button className={borderedButton} aria-label="Increase">
            <Plus />
          </Button>
        </ButtonGroup>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '`ButtonGroupText` slots a non-interactive segment into the '
          + 'group — a URL prefix on the top row, a stepper readout on '
          + 'the bottom.',
      },
    },
  },
}

export const WithSeparator: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <ButtonGroup>
        <Button className={borderedButton}>Save</Button>
        <ButtonGroupSeparator />
        <Button className={borderedButton} aria-label="Copy">
          <Copy />
        </Button>
      </ButtonGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '`ButtonGroupSeparator` renders a stretch `Separator` that '
          + 'divides the primary action from secondary icon actions.',
      },
    },
  },
}

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  render: args => (
    <div className="flex items-center justify-center p-8">
      <ButtonGroup {...args}>
        <Button className={`${borderedButton} w-28`}>Profile</Button>
        <Button className={`${borderedButton} w-28`}>Account</Button>
        <Button className={`${borderedButton} w-28`}>Security</Button>
      </ButtonGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '`orientation="vertical"` stacks items and collapses top/bottom '
          + 'radii instead.',
      },
    },
  },
}

export const WithInput: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <ButtonGroup className="w-80">
        <Input placeholder="Search signals…" className="h-9" />
        <Button className={borderedButton}>Search</Button>
      </ButtonGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Inputs flex to fill the group (`[&>input]:flex-1`), giving a '
          + 'combined search-bar control.',
      },
    },
  },
}
