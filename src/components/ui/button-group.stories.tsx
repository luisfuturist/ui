import type { Meta, StoryObj } from '@storybook/react-vite'
import MaterialAdd from '~icons/material-symbols/add'
import MaterialContentCopy from '~icons/material-symbols/content-copy'
import MaterialRemove from '~icons/material-symbols/remove'

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
          + 'typically use `variant="outline"` so adjacent borders '
          + 'collapse cleanly.',
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


export const Playground: Story = {
  render: args => (
    <div className="flex items-center justify-center p-8">
      <ButtonGroup {...args}>
        <Button variant="outline">Day</Button>
        <Button variant="outline">Week</Button>
        <Button variant="outline">Month</Button>
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
          <Button variant="outline">Visit</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="outline" aria-label="Decrease">
            <MaterialRemove />
          </Button>
          <ButtonGroupText>3</ButtonGroupText>
          <Button variant="outline" aria-label="Increase">
            <MaterialAdd />
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
        <Button variant="outline">Save</Button>
        <ButtonGroupSeparator />
        <Button variant="outline" aria-label="Copy">
          <MaterialContentCopy />
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
        <Button variant="outline" className="w-28">Profile</Button>
        <Button variant="outline" className="w-28">Account</Button>
        <Button variant="outline" className="w-28">Security</Button>
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
        <Button variant="outline">Search</Button>
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
